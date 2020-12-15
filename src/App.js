import './App.css';
import Task from './components/tasks/task';
import Navbar from './components/navbars/navbar';

function App() {
  return (
    <div className="app-container menu-default main-hidden sub-hidden">
      <Navbar></Navbar>
      <main>
        <div classNameName="container-fluid">
          <div className="disable-text-selection">
            <div className="row app-row survey-app">
              <div className="col col-12">
                <div classNameName="row">
                  <div classNameName="col col-12">
                    <Task title ="Aine farroud" category="friend" todayDate="01/01/2021" label="Ferda" details=""></Task>
                  </div>
                  <div classNameName="col col-12">
                    <Task title ="Amine farroud" category="friend" todayDate="01/01/2021" label="Ferda" details=""></Task>
                  </div>        
                  <div classNameName="col col-12">
                    <Task title ="Amine farroud" category="friend" todayDate="01/01/2021" label="Ferda" details=""></Task>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-menu">
              <section className="ps-container ps ps--active-y">
                <div className="p-4">
                  <p className="text-muted text-small mb-3">Status</p> 
                  <ul className="list-unstyled mb-4">
                    <li className="nav-item">
                      <a href="#">
                        <i className="simple-icon-reload"></i> 
                        <span className="d-inline-block">All Tasks</span> 
                        <span className="float-right">3</span>
                      </a>
                    </li> 
                    <li className="nav-item">
                      <a href="#">
                        <i className="simple-icon-refresh"></i>
                        <span className="d-inline-block">Pending Tasks</span>
                        <span className="float-right">2</span>
                      </a>
                    </li> 
                    <li className="nav-item">
                      <a href="#">
                        <i className="simple-icon-check"></i>
                        <span className="d-inline-block">Completed Tasks</span>
                        <span className="float-right">1</span>
                      </a>
                    </li>
                  </ul>
                  <p className="text-muted text-small mb-1">Categories</p> 
                  <ul className="list-unstyled mb-4">
                    <div role="radiogroup" tabindex="-1" className="pt-2 bv-no-focus-ring" id="__BVID__370">
                      <div className="custom-control custom-radio">
                        <input type="radio" autocomplete="off" className="custom-control-input" value="Flexbox" id="__BVID__370__BV_option_0_" name="__BVID__370"/>
                        <label className="custom-control-label" for="__BVID__370__BV_option_0_"><span>Flexbox</span></label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" autocomplete="off" className="custom-control-input" value="Sass" id="__BVID__370__BV_option_1_" name="__BVID__370"/>
                        <label className="custom-control-label" for="__BVID__370__BV_option_1_"><span>Sass</span></label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" autocomplete="off" className="custom-control-input" value="Vue" id="__BVID__370__BV_option_2_" name="__BVID__370"/>
                        <label className="custom-control-label" for="__BVID__370__BV_option_2_"><span>Vue</span></label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" autocomplete="off" className="custom-control-input" value="React" id="__BVID__370__BV_option_3_" name="__BVID__370"/>
                        <label className="custom-control-label" for="__BVID__370__BV_option_3_"><span>React</span></label>
                      </div>
                    </div>
                  </ul>
                  <p className="text-muted text-small mb-3">Labels</p>
                  <div>
                    <p className="d-sm-inline-block mb-1">
                      <a href="#"><span className="badge mb-1 mr-1 badge-outline-secondary badge-pill">EDUCATION</span></a>
                    </p>
                    <p className="d-sm-inline-block mb-1">
                      <a href="#"><span className="badge mb-1 mr-1 badge-outline-primary badge-pill">NEW FRAMEWORK</span></a>
                    </p>
                    <p className="d-sm-inline-block mb-1">
                      <a href="#"><span className="badge mb-1 mr-1 badge-outline-info badge-pill">PERSONAL</span></a>
                    </p>
                  </div>
                </div>
{/*                 <div className="ps__rail-x" style="left: 0px; bottom: 0px;">
                  <div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div className="ps__rail-y" style="top: 0px; right: 0px; height: 175px;">
                  <div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 70px;"></div>
                </div> */}
              </section> 
              <a className="app-menu-button d-inline-block d-xl-none">
                <i className="simple-icon-options"></i>
                </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
