import React, { useState } from 'react';
import { Card, Input, Icon } from 'antd';
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
              <div className={'row'}>
                <div className={'col-md-4'} style={{border: '1px grey solid'}}>
                  <Icon type={'user'} />
                  <b>176</b>
                </div>
              </div>
          </Card>
       </div>
      </div>
   );
};

export default AffiliateScreen;
