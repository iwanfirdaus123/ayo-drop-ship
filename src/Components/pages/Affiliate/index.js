import React, { useState } from 'react';
import { Card, Input, Icon, Divider } from 'antd';
import { StackedInputGroup } from '../../forms';
import style from './affiliate.module.scss';

const AffiliateScreen = () => {
   return (
    <div className={'row'} style={{top: '50vh'}}>
       <div className={'col-md-12'}>
        <h3>Affiliasi</h3>
        <br/>
          <Card
             headStyle={{ border: 'none', fontSize: 24 }}
             style={{minWidth: '70vw'}}>
              <h3>Tracking Stats</h3>
              <br/>
              <div className={'row'}>
                <div className={'col-md-4'} style={{border: '1px grey solid'}}>
                  <Icon type={'select'} style={{fontSize: '100px'}} />
                  <h3 style={{float: 'right'}}>176</h3>
                  <br/>
                  <b style={{float: 'right', marginTop: '-12vh'}}>Klik</b>
                </div>

                <div className={'col-md-4'} style={{border: '1px grey solid'}}>
                  <Icon type={'export'} style={{fontSize: '100px'}} />
                  <h3 style={{float: 'right'}}>20</h3>
                  <br />
                  <b style={{float: 'right', marginTop: '-12vh'}}>Leads</b>
                </div>

                <div className={'col-md-4'} style={{border: '1px grey solid'}}>
                  <Icon type={'dollar'} style={{fontSize: '100px'}} />
                  <h3 style={{float: 'right'}} >3%</h3>
                  <br/>
                  <b style={{float: 'right', marginTop: '-12vh'}}>Referal</b>
                </div>
              </div>
              <br/>
              <h3>Link referal</h3>
              <br/>
              <Input addonAfter={<Icon type="copy" />} style={{}} defaultValue="https://www.ayodropship.com/aff.php?aff=2916" />
              <div className={'row'}>
                <div className={'col-md-6'}>
                  <br/>
                  <h3>Leads Conversion</h3>
                  <br/>
                  <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'right', width: '100%'}}>
                    <h3>0.000%</h3>
                    <b>0/1</b>
                  </div>
                </div>
                <div className={'col-md-6'}>
                  <br/>
                  <h3>New Leads</h3>
                  <br/>
                  <div style={{border: '1px grey solid', display: 'inline-block', textAlign: 'right', width: '100%'}}>
                    <h3>Today : 0</h3>
                    <b>this Month : 0</b>
                  </div>
                </div>
              </div>
              <br/>
              <h3>Latest Update</h3>
              <br/>
              <div className={'row'}>
                <div className={'col-md-6'}>
                  <b>ipsum export esse elit cillum culpa sint minim magna duis eram legam.</b>
                  <br/>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis, cill</p>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis veniam.</p>
                  <b style={{'color': 'green'}}>Read More..</b>
                  <Divider />
                </div>
                <div className={'col-md-6'}>
                  <b>ipsum export esse elit cillum culpa sint minim magna duis eram legam.</b>
                  <br/>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis, cill</p>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis veniam.</p>
                  <b style={{'color': 'green'}}>Read More..</b>
                  <Divider />
                </div>
              </div>
              <div className={'row'}>
                <div className={'col-md-6'}>
                  <b>ipsum export esse elit cillum culpa sint minim magna duis eram legam.</b>
                  <br/>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis, cill</p>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis veniam.</p>
                  <b style={{'color': 'green'}}>Read More..</b>
                </div>
                <div className={'col-md-6'}>
                  <b>ipsum export esse elit cillum culpa sint minim magna duis eram legam.</b>
                  <br/>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis, cill</p>
                  <p>anim fugiat fore enim veniam velit aliqua noster cillum ipsum magna quis veniam.</p>
                  <b style={{'color': 'green'}}>Read More..</b>
                </div>
              </div>
              <br/><br/><br/>
            </Card>
       </div>
      </div>
   );
};

export default AffiliateScreen;
