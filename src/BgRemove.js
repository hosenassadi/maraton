
import './BgRemove.css';
import close from './assets/close.png'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import { useState } from "react";

import DownloadImg from './DownloadImg';

function BgRemove() {

  const [tabname, settabname] = useState('no_bg');

  function tab_click() {
    debugger;
    settabname('original');
  }

  return (
    <div>
        <div className='bg_div_cont'>
            <div className='bg_div_header'>
                <img src={close} className='close_img'/>
                <div className="bg_div_header_title"> העלאת תמונה כדי להסיר את הרקע </div>
                <button className="bg_div_header_button"> העלאת תמונה </button>
                <div className="bg_div_header_subtext"> פורמטים נתמכים png, jpeg</div>
            </div>

            <div className="main_cont">
                <div className="main_left">
                    <div className="middle_div_left">
                        <div className="tab_button_no_bg" onClick={tab_click}> הוסר רקע </div>
                        <div className="tab_button_original" onClick={tab_click}> מקורי </div>
                    </div>

                  <div className="main_left_footer">
                      <div className="main_left_footer_text"> על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות.</div>
                      <button className="main_left_footer_btn"> תקנון חברה </button>
                  </div>

                </div>

                <div className="main_right">
                  <div className="middle_div_right">
                    <DownloadImg title="תמונה חינם" subtitle="612x408  תצוגה מקדימה של תמונה" btnText="הורד" subsubtext="איכות טובה עד 0.25 מגה פיקסל" borderFlag={true} newImage={false}/>
                    <DownloadImg title="Pro" subtitle="1280x1920 תמונה מלאה " btnText=" HD הורד"  subsubtext="איכות טובה עד 0.25 מגה פיקסל" borderFlag={false} newImage={true}/>
                  </div>
                </div>

            </div>

            <div className="footer_cont">
                <img src={logo} className="logo"/>
                <a href="http://www.google.com" target="_blank"><img src={banner} className="banner"/></a>
            </div>
        </div>
    </div>
  );
}

export default BgRemove;
