import './App.css';
import {Link, useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";




function YeniOdeme() {
  
  const navigate = useNavigate();
 

  const[allPayments, setAllPayments] = useState([]); // useState ilk değeri yok demektir 
  
  useEffect(() => {

    if (!localStorage.getItem("userName"))
    {
        navigate('/login', { replace: true });
    }  
 
  }, [])
 
  useEffect(() => { // sayfa açılır açılmaz çalışması gereken yer.
  
    const getAllPaymentsInfo = async () => {
        let response = await axios.get(
            'https://private-a420f-cerenozturk.apiary-mock.com/odeme'
            );
    
            console.log("getAllPaymentsInfo" + response.data.OdemeListesi);

            setAllPayments(response.data.OdemeListesi);

    }
    // call the function
    getAllPaymentsInfo().catch(console.error);
 
  }, [])
  return (
  
   <>

  <Header />

  {/* BEGIN PAGE CONTAINER */}
  <div className="page-container">
    {/* BEGIN PAGE HEAD */}
    <div className="page-head">
      <div className="container">
        {/* BEGIN PAGE TITLE */}
        <div className="page-title">
          <h1>
            Ödeme <small>Yeni Kayıt</small>
          </h1>
        </div>
        {/* END PAGE TITLE */}
        {/* BEGIN PAGE TOOLBAR */}
        <div className="page-toolbar">
          {/* BEGIN THEME PANEL */}
          <div className="btn-group btn-theme-panel">
            <a
              href="javascript:;"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="icon-settings" />
            </a>
            <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <h3>THEME COLORS</h3>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <ul className="theme-colors">
                        <li
                          className="theme-color theme-color-default"
                          data-theme="default"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Default</span>
                        </li>
                        <li
                          className="theme-color theme-color-blue-hoki"
                          data-theme="blue-hoki"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Blue Hoki</span>
                        </li>
                        <li
                          className="theme-color theme-color-blue-steel"
                          data-theme="blue-steel"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Blue Steel</span>
                        </li>
                        <li
                          className="theme-color theme-color-yellow-orange"
                          data-theme="yellow-orange"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Orange</span>
                        </li>
                        <li
                          className="theme-color theme-color-yellow-crusta"
                          data-theme="yellow-crusta"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">
                            Yellow Crusta
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <ul className="theme-colors">
                        <li
                          className="theme-color theme-color-green-haze"
                          data-theme="green-haze"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Green Haze</span>
                        </li>
                        <li
                          className="theme-color theme-color-red-sunglo"
                          data-theme="red-sunglo"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Red Sunglo</span>
                        </li>
                        <li
                          className="theme-color theme-color-red-intense"
                          data-theme="red-intense"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Red Intense</span>
                        </li>
                        <li
                          className="theme-color theme-color-purple-plum"
                          data-theme="purple-plum"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">Purple Plum</span>
                        </li>
                        <li
                          className="theme-color theme-color-purple-studio"
                          data-theme="purple-studio"
                        >
                          <span className="theme-color-view" />
                          <span className="theme-color-name">
                            Purple Studio
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                  <h3>LAYOUT</h3>
                  <ul className="theme-settings">
                    <li>
                      Theme Style
                      <select
                        className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                        data-original-title="Change theme style"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="boxed" selected="selected">
                          Square corners
                        </option>
                        <option value="rounded">Rounded corners</option>
                      </select>
                    </li>
                    <li>
                      Layout
                      <select
                        className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                        data-original-title="Change layout type"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="boxed" selected="selected">
                          Boxed
                        </option>
                        <option value="fluid">Fluid</option>
                      </select>
                    </li>
                    <li>
                      Top Menu Style
                      <select
                        className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                        data-original-title="Change top menu dropdowns style"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="dark" selected="selected">
                          Dark
                        </option>
                        <option value="light">Light</option>
                      </select>
                    </li>
                    <li>
                      Top Menu Mode
                      <select
                        className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                        data-original-title="Enable fixed(sticky) top menu"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="fixed">Fixed</option>
                        <option value="not-fixed" selected="selected">
                          Not Fixed
                        </option>
                      </select>
                    </li>
                    <li>
                      Mega Menu Style
                      <select
                        className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                        data-original-title="Change mega menu dropdowns style"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="dark" selected="selected">
                          Dark
                        </option>
                        <option value="light">Light</option>
                      </select>
                    </li>
                    <li>
                      Mega Menu Mode
                      <select
                        className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                        data-original-title="Enable fixed(sticky) mega menu"
                        data-container="body"
                        data-placement="left"
                      >
                        <option value="fixed" selected="selected">
                          Fixed
                        </option>
                        <option value="not-fixed">Not Fixed</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* END THEME PANEL */}
        </div>
        {/* END PAGE TOOLBAR */}
      </div>
    </div>
    {/* END PAGE HEAD */}
    {/* BEGIN PAGE CONTENT */}
    <div className="page-content">
      <div className="container">
        {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
        <div
          className="modal fade"
          id="portlet-config"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                />
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">Widget settings form goes here</div>
              <div className="modal-footer">
                <button type="button" className="btn blue">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
        {/* BEGIN PAGE BREADCRUMB */}
        <ul className="page-breadcrumb breadcrumb">
          <li>
            <a href="#">Operasyon</a>
            <i className="fa fa-circle" />
          </li>
          <li>
            <a href="#">Ödeme</a>
            <i className="fa fa-circle" />
          </li>
          <li>
            < Link to ="/YeniOdeme"> Yeni Kayıt </ Link>
          </li>
        </ul>
        {/* END PAGE BREADCRUMB */}
       
        <div className="row">
        <div className="col-md-12">
          {/* BEGIN SAMPLE FORM PORTLET*/}
          <div className="portlet light">
            <div className="portlet-title">
              <div className="caption font-green-haze">
                {/* <i class="icon-settings font-green-haze"></i>
								<span class="caption-subject bold uppercase"> Horizontal Form</span> */}
              </div>
              <div className="actions">
                {/* <a class="btn btn-circle btn-icon-only blue" href="javascript:;">
								<i class="icon-cloud-upload"></i>
								</a>
								<a class="btn btn-circle btn-icon-only green" href="javascript:;">
								<i class="icon-wrench"></i>
								</a>
								<a class="btn btn-circle btn-icon-only red" href="javascript:;">
								<i class="icon-trash"></i> */}
                <a className="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;" data-original-title title>
                </a>
              </div>
            </div>
            <div className="portlet-body form">
              <form role="form" className="form-horizontal">
                <div className="form-body">
                  <div className="form-group form-md-line-input">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Kime</label>
                    <div className="col-md-10">
                      <select className="form-control" id="form_control_1">
                        <option value>Lütfen seçiniz..</option>
                        <option value>Müşteri 1</option>
                        <option value>Müşteri 2</option>
                        <option value>Müşteri 3</option>
                        <option value>Müşteri 4</option>
                      </select>
                      <div className="form-control-focus">
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-md-line-input">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Tutar</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" id="form_control_1" />
                      <div className="form-control-focus">
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-md-line-input">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Para Birimi</label>
                    <div className="col-md-10">
                      <select className="form-control" id="form_control_1">
                        <option value>Lütfen seçiniz..</option>
                        <option value>TRY</option>
                        <option value>EUR</option>
                        <option value>USD</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-md-line-input">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Ödeme Tarihi</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" id="form_control_1" placeholder="GG/AA/YYYY" />
                      <div className="form-control-focus">
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-md-line-input">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Ödeme Kanalı</label>
                    <div className="col-md-10">
                      <select className="form-control" id="form_control_1">
                        <option value>Lütfen seçiniz..</option>
                        <option value>Kredi kartı</option>
                        <option value>Banka Havale/EFT</option>
                        <option value>Çek</option>
                        <option value>Senet</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-md-line-input has-success">
                    <label className="col-md-2 control-label" htmlFor="form_control_1">Açıklama</label>
                    <div className="col-md-10">
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-control-focus">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-actions">
                  <div className="row">
                    <div className="col-md-offset-2 col-md-10">
                      <button type="button" className="btn blue">Kaydet</button>
                      <button type="button" className="btn default">Vazgeç</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* END SAMPLE FORM PORTLET*/}
        </div>
      </div>
      </div>
    </div>
    {/* END PAGE CONTENT */}
  </div>
  {/* END PAGE CONTAINER */}

  <Footer/> 

</>

  );
}

export default YeniOdeme;
