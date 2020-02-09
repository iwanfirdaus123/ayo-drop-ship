import React, { useState } from 'react';
import { Card, Input, Icon, Divider, Tabs } from 'antd';
import { StackedInputGroup } from '../../forms';
import style from './training.module.scss';
import facebook from 'Assets/images/facebook.png';
import wordpress from 'Assets/images/wordpress.png';
import leadpages from 'Assets/images/leadpages.png';
import paypal from 'Assets/images/paypal.png';
import mailChimp from 'Assets/images/mail-chimp.png';
import divi from 'Assets/images/divi.png';
import twitter from 'Assets/images/twitter.png';
import zaiper from 'Assets/images/zaiper.png';
import optimizePress from 'Assets/images/optimize-press.png';

const { TabPane } = Tabs;

const TrainingScreen = () => {
   return (
    <div className={'row'} style={{top: '50vh'}}>
       <div className={'col-md-12'}>
        <h3>Training</h3>
        <br/>
          <Card
             headStyle={{ border: 'none', fontSize: 24 }}
             style={{width: '70vw'}}>
             <Tabs defaultActiveKey="1">
               <TabPane tab="Modul Video" key="1">
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Facebook</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Wordpress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>LeadPages</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Paypal</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Mail Chimp</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Divi</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Twitter</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Zaiper</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>OptimizePress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
               </TabPane>
               <TabPane tab="Tools" key="2">
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Facebook</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Wordpress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>LeadPages</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Paypal</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Mail Chimp</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Divi</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Twitter</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>Zaiper</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <h3>OptimizePress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
               </TabPane>
               <TabPane tab="Rekomendasi" key="3">
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={facebook} alt="facebook" style={{height: '70px'}} />
                       <h3>Facebook</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={wordpress} alt="wordpress" style={{height: '70px'}} />
                       <h3>Wordpress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={leadpages} alt="leadpages" style={{height: '70px'}} />
                       <h3>LeadPages</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={paypal} alt="paypal" style={{height: '70px'}} />
                       <h3>Paypal</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={mailChimp} alt="mailChimp" style={{height: '70px'}} />
                       <h3>Mail Chimp</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={divi} alt="divi" style={{height: '70px'}} />
                       <h3>Divi</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
                 <br/>
                 <div className={'row'}>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={twitter} alt="twitter" style={{height: '70px'}} />
                       <h3>Twitter</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={zaiper} alt="zaiper" style={{height: '70px'}} />
                       <h3>Zaiper</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit fore cillum.</p>
                       <p>velit culpa quis veniam cillum elit fore cil.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                     </div>
                   </div>
                   <div className={'col-md-4'}>
                     <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'center', width: '100%'}}>
                       <img src={optimizePress} alt="optimizePress" style={{height: '70px'}} />
                       <h3>OptimizePress</h3>
                       <p>velit culpa quis veniam cillum elit fore.</p>
                       <p>velit culpa quis veniam cillum elit f.</p>
                       <p>velit culpa quis veniam cillum elit.</p>
                       <p>velit culpa quis veniam cillum eli.</p>
                     </div>
                   </div>
                 </div>
               </TabPane>
             </Tabs>

             <br/><br/><br/>
            </Card>
       </div>
      </div>
   );
};

export default TrainingScreen;
