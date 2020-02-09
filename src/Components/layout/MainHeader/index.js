import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Icon, Typography, Input, Divider } from 'antd';
// util
import { RouteMap } from 'Routes';
import { useResponsive } from 'Components/hooks';
import { $envDisplay } from 'Config';
// store
import { Actions } from 'Store';
// style
import style from './mainHeader.module.scss';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

/**
 * Main header for the application
 */
function MainHeader(props) {
   const { logout, sidebarIsCollapsed, toggleCollapsed } = props;
   const isMediumOrSmaller = useResponsive('md');

   return (
      <Header
         className={`${style.Header} ${
            isMediumOrSmaller ? style.noSidebar : sidebarIsCollapsed ? style.collapsed : style.expanded
         }`}>
         <div className={style.titleWrapper}>
            <Icon
               id={'sideBarToggle'}
               className={style.icon}
               type={sidebarIsCollapsed ? 'menu-unfold' : 'menu-fold'}
               onClick={toggleCollapsed}
            />
         </div>
         <div>
            <Link to={RouteMap.ROOT} style={{ margin: '0px 10px' }} onClick={logout}>
               Logout
            </Link>
            <Divider type="vertical" style={{ height: '20px' }} />
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
         </div>
      </Header>
   );
}

const mapStateToProps = state => {
   return state.user;
};

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(Actions.logout())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

MainHeader.propTypes = {
   /** method to log out of the app */
   logout: PropTypes.func.isRequired,
   /** Is sidebar collapsed? */
   sidebarIsCollapsed: PropTypes.bool.isRequired,
   /** Is sidebar collapsed? */
   toggleCollapsed: PropTypes.func.isRequired
};
