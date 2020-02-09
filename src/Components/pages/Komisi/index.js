import React, { useState } from 'react';
import { Card, Button, Icon } from 'antd';
import { StackedInputGroup } from '../../forms';
import style from './komisi.module.scss';

const KomisiScreen = () => {
   return (
    <div className={'row'} style={{top: '50vh'}}>
       <div className={'col-md-12'}>
        <h3>Komisi</h3>
        <br/>
          <Card
             headStyle={{ border: 'none', fontSize: 24 }}
             style={{minWidth: '70vw'}}>

              <div className={'row'}>
                <div className={'col-md-6'} style={{border: '1px grey solid'}}>
                  <b>KOMISI AFFILIATE</b>
                  <br/>
                  <h3>RP 1.200.000</h3>
                </div>

                <div className={'col-md-6'} style={{border: '1px grey solid'}}>
                  <b>VOUCHER BELANJA</b>
                  <br />
                  <h3>RP 700.000</h3>
                </div>
              </div>
              <br/>
              <h3>Withdraw</h3>
              <br/>
              <Button type="default" style={{backgroundColor: 'green', color: 'white', paddingBottom: '1px'}}>
                    <Icon type={'printer'} style={{fontSize: '18px'}} /><b> Permohonan Penarikan</b>
              </Button>
              <br/><br/>
              <p><Icon type={'info-circle'} style={{color: 'blue'}} /> Kamu dapat melakukan withdrawal jika saldo kamu sudah mencapai jumlah minimum yang ditentukan Rp. 50.000.</p>
              <br/><br/><br/>
            </Card>
       </div>
      </div>
   );
};

export default KomisiScreen;
