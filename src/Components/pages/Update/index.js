import React, { useState } from 'react';
import { Card, Button, Icon, Divider } from 'antd';
import { StackedInputGroup } from '../../forms';
import style from './update.module.scss';

const UpdateScreen = () => {
   return (
    <div className={'row'} style={{top: '50vh'}}>
       <div className={'col-md-12'}>
        <h3>Update</h3>
        <br/>
          <Card
             headStyle={{ border: 'none', fontSize: 24 }}
             style={{minWidth: '70vw'}}>

              <div className={'row'}>
                <h4>Member Type: <b>BASIC</b></h4>
                <Divider />
                <div className={'col-md-5'}>
                  <b>Manage Membership</b>
                  <p>Member Since: <b>22 Oct 2019</b></p>
                  <br/>
                  <a style={{color: 'sky'}}>Change Member Type</a>
                </div>
                <div className={'col-md-2'}>
                  <Divider type="vertical" style={{height: '130px'}} />
                </div>
                <div className={'col-md-5'}>
                <br/>
                <br/>
                  <Button type="default" style={{backgroundColor: 'green', color: 'white', padding: '20px'}}>
                        <b> EDIT PAYMENT METHOD</b>
                  </Button>
                </div>
              </div>
              <Divider/>
              <br/>
              <center>
                <h4>Manage Membership</h4>
                <p>quae illum export dolor tempor nulla ipsum irure anim legam irure magna elit
                nisi</p>
                <p>malis cillum labore aliqua minim fugiat sunt quis export duis eram summis
                quid fugiat esse summis</p>
                <br/>
                <p>Discounted <b>Pro Training</b></p>
                <br/>
                <Button type="default" style={{backgroundColor: 'green', color: 'white', paddingBottom: '1px'}}>
                      <Icon type={'rocket'} style={{fontSize: '18px'}} /><b> UPGRADE TO PRO MEMBERSHIP</b>
                </Button>
                <br/><br/><br/>
              </center>
            </Card>
       </div>
      </div>
   );
};

export default UpdateScreen;
