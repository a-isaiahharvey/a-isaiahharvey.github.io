use stylist::css;
use yew::{classes, html, Component, Context, Html};

pub enum Msg {
    Open,
    Close,
}

struct LinkItem {
    text: &'static str,
    link: &'static str,
}

const LINK_ITEMS: &[LinkItem] = &[
    LinkItem {
        text: "Donate",
        link: "/donate",
    },
    LinkItem {
        text: "About",
        link: "/about",
    },
    LinkItem {
        text: "Contact",
        link: "/contact",
    },
    LinkItem {
        text: "Blog",
        link: "https://medium.com/@allisterharvey",
    },
];

pub struct NavMenu {
    is_open: bool,
}

impl NavMenu {
    fn nav_menu_item_component(item: &LinkItem) -> Html {
        html! {
            <li>
                <a href={item.link} class={classes!["block", "py-2", "pr-4", "pl-3", "text-gray-700", "md:text-base", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:border-0", "md:hover:text-blue-700", "md:p-0", "dark:text-gray-400", "md:dark:hover:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent"]}>{item.text}</a>
            </li>
        }
    }
}

impl Component for NavMenu {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self { is_open: false }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let onclick_navbar_button = {
            let flag = self.is_open;
            ctx.link()
                .callback(move |_| if flag { Msg::Close } else { Msg::Open })
        };

        let glassmorphism = css!(
            r"
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        "
        );

        html! {
            <nav class={classes!("bg-white",  "border-gray-200", "px-2", "sm:px-4", "py-2.5", "dark:bg-gray-900", glassmorphism.clone())}>
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" class="flex items-center md:text-xl font-bold">
                        <span class="text-slate-500 dark:text-slate-400">{"Allister I. Harvey"}</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onclick={onclick_navbar_button}>
                        <span class="sr-only">{"Open main menu"}</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class={format!("{}w-full md:block md:w-auto", if !self.is_open { "hidden "} else { "" })} id="navbar-default">
                        <ul class={classes!("flex","flex-col","p-4","mt-4","bg-gray-50","rounded-lg","border","border-gray-100","md:flex-row","md:space-x-8","md:mt-0","md:text-sm","md:font-medium","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700", glassmorphism)}>
                        {
                            LINK_ITEMS.iter().map(|item| {
                                html! {
                                    Self::nav_menu_item_component(item)
                                }
                            }).collect::<Html>()

                        }
                        </ul>
                    </div>
                </div>
            </nav>
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::Open => self.is_open = true,
            Msg::Close => self.is_open = false,
        }
        true
    }
}
