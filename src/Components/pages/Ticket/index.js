import React from 'react';
import { Card, Input, Button, Divider, Select } from 'antd';
import { Link } from 'react-router-dom';
import { StackedInputGroup } from '../../forms';
import style from './ticket.module.scss';

const { Option } = Select;
const { TextArea } = Input;

const TicketScreen = () => {
   return (
      <div className={'row'}>
       <div className={'col-md-12'}>
       <h3>Support</h3>
       <br/>
          <Card
             className={style.Card}
             headStyle={{ border: 'none', fontSize: 24 }}>
             <h4>Create New Ticket</h4>
             <Divider />
             <p>Support Information</p>
             <br/>
             <div className={'row'}>
                 <div className={'col-md-6'}>
                  <StackedInputGroup label={'Divisi'}>
                    <Select style={{ width: '100%' }} defaultValue="Akunting">
                      <Option value="Akunting">Akunting</Option>
                      <Option value="Programmer">Programmer</Option>
                    </Select>
                  </StackedInputGroup>
                 </div>
                 <div className={'col-md-6'}>
                   <StackedInputGroup label={'Subject'}>
                      <Input
                         name={'subject'}
                         type={'subject'}
                         placeholder="Subject"
                      />
                   </StackedInputGroup>
                 </div>
             </div>
             <StackedInputGroup label={'Email'}>
                <Input
                   name={'username'}
                   placeholder="Email"
                />
             </StackedInputGroup>
             <StackedInputGroup label={'Deskripsi'}>
                <TextArea rows={4} />
             </StackedInputGroup>
             <div className={style.buttonWrapper} style={{float: 'right'}}>
                <Button type="default" style={{backgroundColor: 'green', color: 'white'}}>
                   KIRIM
                </Button>
             </div>
             <br/>
          </Card>
       </div>
      </div>
   );
};

export default TicketScreen;
