import React, { useState } from 'react';
import { Card, Tabs, Input, Button } from 'antd';
import { StackedInputGroup } from '../../forms';
import style from './profile.module.scss';

const { TabPane } = Tabs;

const ProfileScreen = () => {
   return (
    <div className={'row'} style={{top: '50vh'}}>
       <div className={'col-md-12'}>
        <h3>Profile</h3>
        <br/>
          <Card
             headStyle={{ border: 'none', fontSize: 24 }}
             style={{minWidth: '70vw'}}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">
                  <StackedInputGroup label={'Email'}>
                      <Input
                        name={'email'}
                        type={'email'}
                        placeholder="Email"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Username'}>
                      <Input
                        name={'username'}
                        placeholder="Username"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Nama Lengkap'}>
                      <Input
                        name={'nama'}
                        placeholder="Nama Lengkap"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'No Hape'}>
                      <Input
                        name={'hp'}
                        placeholder="No Hape"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Alamat'}>
                      <Input
                        name={'alamat'}
                        placeholder="Alamat"
                      />
                  </StackedInputGroup>
                  <Button type="default" style={{float: 'right', backgroundColor: 'green', color: 'white'}}>
                        SIMPAN
                  </Button>
                </TabPane>
                <TabPane tab="Rekening Bank" key="2">
                  <StackedInputGroup label={'Credit Card'}>
                      <Input
                        name={'credit'}
                        placeholder="Credit Card"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'CVV'}>
                      <Input
                        name={'cvv'}
                        placeholder="CVV"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Nama Bank'}>
                      <Input
                        name={'bank'}
                        placeholder="Nama Bank"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Pemilik'}>
                      <Input
                        name={'pemilik'}
                        placeholder="Nama Pemilik"
                      />
                  </StackedInputGroup>
                  <Button type="default" style={{float: 'right', backgroundColor: 'green', color: 'white'}}>
                        SIMPAN
                  </Button>
                </TabPane>
                <TabPane tab="Password" key="3">
                  <StackedInputGroup label={'Password Sekarang'}>
                      <Input
                        name={'password'}
                        type={'password'}
                        placeholder="Password"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={'Password Baru'}>
                      <Input
                        name={'password'}
                        type={'password'}
                        placeholder="Password"
                      />
                  </StackedInputGroup>
                  <StackedInputGroup label={' '}>
                      <Input
                        name={'password'}
                        type={'password'}
                        placeholder="Ulangi Password"
                      />
                  </StackedInputGroup>
                  <Button type="default" style={{float: 'right', backgroundColor: 'green', color: 'white'}}>
                        SIMPAN
                  </Button>
                </TabPane>
              </Tabs>
          </Card>
       </div>
      </div>
   );
};

export default ProfileScreen;
