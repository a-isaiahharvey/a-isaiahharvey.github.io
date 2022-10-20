use frontend::routes;
use yew::prelude::*;
use yew_router::prelude::*;

// ===================================================================================
// for {username}.github.io

#[derive(Clone, Routable, PartialEq)]
enum RootRoute {
    #[at("/")]
    Home,
    #[at("/donate")]
    Donate,
    #[at("/about")]
    About,
    #[at("/contact")]
    Contact,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: RootRoute) -> Html {
    match routes {
        RootRoute::Home => routes::home_page(),
        RootRoute::Donate => routes::donate_page(),
        RootRoute::About => routes::about_page(),
        RootRoute::NotFound => html! { <p>{ "Not Found" }</p> },
        RootRoute::Contact => routes::contact_page(),
    }
}

// ===================================================================================

/// main root
#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<RootRoute> render={switch} />
        </BrowserRouter>
    }
}

/// entry point
fn main() {
    yew::Renderer::<App>::new().render();
}
