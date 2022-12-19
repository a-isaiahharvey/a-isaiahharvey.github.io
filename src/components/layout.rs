use yew::prelude::*;

use super::NavMenu;

#[derive(PartialEq, Properties)]
pub struct Props {
    pub children: Children,
}

#[function_component]
pub fn Layout(props: &Props) -> Html {
    let Props { children } = props;
    html! {
        <>
            <NavMenu/>
            <div class="p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                <main class="container">
                    { children.clone() }
                </main>
            </div>
        </>
    }
}
