use yew::{html, Html};

use crate::components::layout;

pub fn home_page() -> Html {
    layout(html! {
      <section class="relative pt-24 pb-36 overflow-hidden">
        <div class="relative z-10 container px-4 mx-auto">
          <img class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto" src="/allister-isaiah-harvey.png" alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center space-y-4">
            <figcaption class="font-medium">
              <div class="text-cyan-600 text-4xl font-bold">
                {"Allister Isaiah Harvey"}
              </div>
              <div class="text-gray-500 text-lg">
                {"Hobby Open-Sourcerer & Audio Engineer"}
              </div>
            </figcaption>
          </div>
          <div class="flex space-x-2 justify-center">
            <div class="max-w-none px-6 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-6">
              <div class="flex flex w-full sm:w-auto">
                <a href="https://github.com/a-isaiahharvey" class="btn inline-block px-6 pt-2.5 pb-2 bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium text-sm leading-normal uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out ">
                <i class="fa-brands fa-github"></i>
                {" GitHub "}
                </a>
              </div>
              <div class="flex flex w-full sm:w-auto">
                <a href="https://soundcloud.com/ai-harvey" class="btn px-6 pt-2.5 pb-2 bg-amber-500 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-medium text-sm leading-normal uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                <i class="fa-brands fa-soundcloud"></i>
                {" SoundCloud "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    })
}

pub fn about_page() -> Html {
    layout(html! {
      <section class="relative pt-24 pb-36 overflow-hidden">
        <div class="relative z-10 container px-4 mx-auto">
          <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none text-slate-900 dark:text-slate-50">{"About"}</h2>
          <p class="mb-20 text-lg text-slate-500 dark:text-slate-400 text-center font-medium leading-normal md:max-w-16  mx-auto">{"I want to become a full-time open-source programmer so that I can contribute to making free and open software for everyone to use in their daily lives. I love programming and helping people fix code because I believe that it will help developers, end users, and future learners. At this moment, I use the Rust programing language for software development and working on creating Rust bindings to native MacOS software libraries."}</p>
        </div>
      </section>
    })
}

pub fn contact_page() -> Html {
    layout(html! {
      <section class="relative pt-24 pb-36 overflow-hidden">
        <div class="relative z-10 container px-4 mx-auto">
          <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none text-slate-900 dark:text-slate-50">{"Contact"}</h2>
          <p class="mb-20 text-lg text-slate-500 dark:text-slate-400 text-center font-medium leading-normal md:max-w-lg mx-auto">{"I value my time, so make it worth it, and keep it succinct. Please no support questions, job offers, questionnaires, etc."}</p>
          <div class="flex flex-wrap -m-3">
            <div class="w-full md:w-3/3 p-3">
              <div class="p-11 h-full text-center bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div class="mb-6 relative mx-auto w-16 h-16 bg-blue-600 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 class="text-slate-500 dark:text-slate-400 mb-3 text-xl font-bold font-heading leading-snug">{"Email"}</h3>
                <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{"a.i.harvey@icloud.com"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    })
}
