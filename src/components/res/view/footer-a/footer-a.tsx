import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'footer-a',
  styleUrl: 'footer-a.css',
  shadow: false,
})
export class FooterA implements ComponentInterface {


  render() {
    return (
      <footer class="container-fluid footer">
        <div class="container">
          <div class="row footer_margin">
            <div class="col-lg-3 col-sm-4">
              <div class="corp_info">
                The online video editor trusted by content creators to make professional video in minutes.
              </div>
              <div class="social_links mt-4">
                <div class="social_link mr-3">
                  <a href="">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social_link mr-3">
                  <a href="">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social_link mr-3">
                  <a href="">
                    <i class="fab fa-invision"></i>
                  </a>
                </div>
                <div class="social_link">
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="title_links">
                Solutions
                <div class="footer_links">
            <span class="footer_link">
              <a href="">
                Studio
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Lightbox
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Wavi
              </a>
            </span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="title_links">
                Why Wibbitz
                <div class="footer_links">
              <span class="footer_link">
                <a href="">
                  Marketing
                 </a>
              </span>
                  <span class="footer_link">
              <a href="">
                Social Media
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                News & Editorial
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Agencies
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Internal
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Communications
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Enterprice
              </a>
            </span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="title_links title_links_sm">
                Resources
                <div class="footer_links">
            <span class="footer_link">
              <a href="">
                Blog
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Customers
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Video Showcase
              </a>
            </span>
                  <span class="footer_link">
              <a href="">
                Watch Demo
              </a>
            </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="title_links title_links_sm">
                Pricing
                <div class="footer_links mt-3">
                  <div class="title_links title_links_sm">
                    Company
                    <div class="footer_links mt-2">
                <span class="footer_link">
                  <a href="">
                    About Us
                  </a>
                </span>
                      <span class="footer_link">
                  <a href="">
                    Jobs
                  </a>
                </span>
                      <span class="footer_link">
                  <a href="">
                    Press
                  </a>
                </span>
                    </div>
                  </div>
                  <div class="title_links title_links_sm mt-4">
                    Legal
                    <div class="footer_links mt-4">
                <span class="footer_link">
                  <a href="">
                    Terms and Conditions
                  </a>
                </span>
                      <span class="footer_link">
                  <a href="">
                    Privacy Policy
                  </a>
                </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="row copyright_content">
              <div class="col-12">
                <div class="copyright_content_languages">
            <span class="language_icon pr-2">
              <i class="fas fa-globe-americas"></i>
            </span>
                  Choose language
                </div>
                <div class="content_language">
            <span class="pr-4">
              <a href="#">
                English(United States)
              </a>
            </span>
                  <span>
              <a href="#">
                French
              </a>
            </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }

}
