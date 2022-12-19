use gloo::utils::document;
use rand::{rngs::ThreadRng, Rng};
use stylist::style;
use wasm_bindgen::JsCast;
use web_sys::HtmlElement;
use yew::{classes, html, Component};

/// A container for snow fall
pub struct SnowContainer {
    random: ThreadRng,
}

impl SnowContainer {
    fn get_random_styles(&mut self) -> String {
        let top = self.random.gen_range(0..100);
        let left = self.random.gen_range(0..100);
        let dur = self.random.gen_range(0..10) + 10;
        let size = self.random.gen_range(0..25) + 25;

        format!(
            r"top: -{top}%; 
            left: {left}%; 
            font-size: {size}px; 
            animation-duration: {dur}s;"
        )
    }
}

impl Component for SnowContainer {
    type Message = ();

    type Properties = ();

    fn create(_: &yew::Context<Self>) -> Self {
        SnowContainer {
            random: rand::thread_rng(),
        }
    }

    fn view(&self, _: &yew::Context<Self>) -> yew::Html {
        let style = style!(
            r"
            height: 100vh;
            overflow: hidden;
            position: absolute;
            top: 0;
            transition: opacity 500ms;
            width: 100%;
            

            .snow {
                animation: fall ease-in infinite, sway ease-in-out infinite;
                color: skyblue;
                position: absolute;
            }

            @keyframes fall {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    top: 100vh;
                    opacity: 1;
                }
            }

            @keyframes sway {
                0% {
                    margin-left: 0;
                }
                25% {
                    margin-left: 50px;
                }
                50% {
                    margin-left: -50px;
                }
                75% {
                    margin-left: 50px;
                }
                100% {
                    margin-left: 0;
                }
            }
            "
        )
        .expect("Could not create styles for `snow-container`");

        html! {
            <div id={"snow-container"} class={classes![style]}>
            </div>
        }
    }

    fn rendered(&mut self, _ctx: &yew::Context<Self>, first_render: bool) {
        if first_render {
            let snow_container = document()
                .get_element_by_id("snow-container")
                .expect("Could not get Snow container");
            let snow_content = ["&#10052", "&#10053", "&#10054"];

            let mut create_snow = |num| {
                for _ in (0..num).rev() {
                    let snow = document()
                        .create_element("div")
                        .expect("Unable to create snow `div`")
                        .dyn_into::<HtmlElement>()
                        .expect("Could not create snow html element");
                    snow.set_class_name("snow");
                    snow.style().set_css_text(&self.get_random_styles());
                    snow.set_inner_html(snow_content[self.random.gen_range(0..2)]);
                    snow_container
                        .append_with_node_1(&snow.get_root_node())
                        .expect("Could not append `snow`");
                }
            };

            create_snow(35)
        }
    }
}
