import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {markdown} from "markdown";

@Component({
  tag: 's-abdullakh-app-blog',
  styleUrl: 's-abdullakh-app-blog.css',
  shadow: false,
})
export class SAbdullakhAppBlog implements ComponentInterface {
  @Prop() p: any;

  render() {
    const text = this.p.map((item) =>{
      return(
        <p innerHTML={markdown.toHTML(item.text)}>

        </p>
      )
      }

    )
    return (
      <section class="container">
        <div class="head_blog_section text-center mt-5">
          <div class="category">
            <div class="trends_categoty">
              <a href="#">
                Trends & Insights
              </a>
            </div>
          </div>
          <div class="title_blog_section">
            <h1>
              6 ways for financeial & legal marketers to differebtiate their firm through video
            </h1>
            <div class="author">
              <h3>
                Erik Mathes
              </h3>
              <p>
                Oct 15, 2019
              </p>
            </div>
          </div>
        </div>
        <div class="blog_posts">
          <div class="foreword_heading">
            <div class="blog_posts_img mb-5">
            </div>
            <div class="blog_content">
              <div class="social_links_themeTwo">
                <div class="social_link_themeTwo">
                  <a href="">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social_link_themeTwo">
                  <a href="">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social_link_themeTwo ">
                  <a href="">
                    <i class="fab fa-invision"></i>
                  </a>
                </div>
                <div class="social_link_themeTwo ">
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div >
                {text}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum.
              </p>

              <div class="blog-wibbitz-report">
                <div class="text">
                  <h4>
                    Ready to continue your video marketing journey?
                  </h4>
                  <p>
                    Explore our latest report for all the best practices & inights you`ll need to eaisily navigate the
                    video marketing landscape
                  </p>
                  <div class="pt-3">
                    <button class="btn book_prewiev_btn">
                      Explore Report
                    </button>
                  </div>
                </div>
                <div class="image img_one">

                </div>
              </div>

              <div class="content_heading">
                <h3>
                  1. Humanize your firm by showing causes you support
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                <iframe class="content_video border-radius"
                        src="https://player.vimeo.com/video/345554603?dnt=1&app_id=122963"
                        width="900" height="400"></iframe>
              </p>
              <div class="content_heading">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                  doloribus
                  earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam
                  unde vel
                  vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                  dignissimos
                  doloribus
                  earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
                </p>
              </div>
              <div class="bd-example">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                  </ol>
                  <div class="carousel-inner border-radius">
                    <div class="carousel-item active">
                      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                           role="img" aria-label="Placeholder: First slide"><title>Placeholder</title>
                        <rect fill="#777" width="100%" height="100%"></rect>
                        <text fill="#555" dy=".3em" x="50%" y="50%">First slide</text>
                      </svg>
                    </div>
                    <div class="carousel-item">
                      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                           role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title>
                        <rect fill="#666" width="100%" height="100%"></rect>
                        <text fill="#444" dy=".3em" x="50%" y="50%">Second slide</text>
                      </svg>
                    </div>
                    <div class="carousel-item">
                      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                           role="img" aria-label="Placeholder: Third slide"><title>Placeholder</title>
                        <rect fill="#555" width="100%" height="100%"></rect>
                        <text fill="#333" dy=".3em" x="50%" y="50%">Third slide</text>
                      </svg>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="content_heading">
                <h3>
                  2. Recruit new talent to your team
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <div class="citate">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                  doloribus
                  earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam
                  unde vel
                  vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                  dignissimos
                  doloribus
                  earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."
                </p>
              </div>
              <div class="content_heading">
                <div class="two_glava img_two border-radius">

                </div>
              </div>
              <div class="content_heading">
                <h3>
                  3. Provide valuable information to ear viewer,s trust
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero!
              </p>
              <p>
                <iframe class="content_video border-radius"
                        src="https://player.vimeo.com/video/345554603?dnt=1&app_id=122963"
                        width="900" height="400"></iframe>
              </p>
              <div class="content_heading">
                <h3>
                  4. Showcase your firm`s best pro bono work
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente. Accusamus
                aperiam
                consectetur
                dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod
                sapiente
                totam ullam
                unde vel vero!
              </p>
              <div class="content_heading">
                <div class="two_glava img_three border-radius">

                </div>
              </div>
              <div class="content_heading">
                <h3>
                  5. Announce and promote events your firm is hosting
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente
              </p>
              <div class="content_heading">
                <p>
                  <iframe class="content_video border-radius"
                          src="https://player.vimeo.com/video/345554603?dnt=1&app_id=122963" width="900"
                          height="400"></iframe>
                </p>
              </div>
              <div class="content_heading">
                <h3>
                  6. Highlight your form`s accolades and stats
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur
                dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div class="content_heading">
                <div class="two_glava img_four border-radius">
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos
                doloribus
                earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde
                vel
                vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div class="author_info">
                <div class="row subscribe py-5">
                  <div class="col-lg-6 col-12">
                    <div class="author_block">
                      <div class="author_img">
                      </div>
                      <div class="author_name_work">
                        <div class="author_name">
                          Erik Mathers
                        </div>
                        <div class="author_work">
                          Content Marketing Strategist
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 align-self-center">
                    <div class="social_contact">
                      <div class="social_contact_text">
                        Follow me on:
                      </div>
                      <div class="social_contact_icons">
                        <div class="social_links">
                          <div class="social_link">
                            <a href="">
                              <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            </a>
                          </div>
                          <div class="social_link">
                            <a href="">
                              <i class="fab fa-invision"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }

}
