use yew::{html, Html};

mod nav_menu;
pub use nav_menu::NavMenu;

pub fn layout(content: Html) -> Html {
    html! {
        <>
            <NavMenu />

            <div class="p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                {content}
            </div>
        </>
    }
}
