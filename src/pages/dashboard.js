import Image from 'next/image'
import axios from "axios";
import React from "react";
import Footer from '../components/common/layouts/Footer'
import Link from 'next/link'
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function Dashboard() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;


    return ( 
        <div className="wrapper">

<div className="sidebar" data-color="purple" style={{backgroundImage : `url("../img/sidebar-5.jpg")` }} >

<div className="sidebar-wrapper">
    <div className="user">
        <div className="info">
            <div className="photo">
                <img src="../img/default-avatar.png" />
            </div>
            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                <span>
User Name
<b className="caret"></b>
</span>
            </a>
            <div className="collapse" id="collapseExample">
                <ul className="nav">
                    <li>
                        <a href="#">
                            <i className="pe-7s-user"></i>
                            <span className="sidebar-normal">My Profile</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <ul className="nav">
        <li className="active">
            <a href="">
                <i className="pe-7s-graph"></i>
                <p>Dashboard</p>
            </a>
        </li>

        <li>
            <a data-toggle="collapse" href="#formsExamples">
                <i className="pe-7s-note2"></i>
                <p>Single Link
                </p>
            </a>

        </li>
        <li>
            <a data-toggle="collapse" href="#tablesExamples">
                <i className="pe-7s-news-paper"></i>
                <p>Menu with links
                    <b className="caret"></b>
                </p>
            </a>
            <div className="collapse" id="tablesExamples">
                <ul className="nav">
                    <li>
                        <a href="#">
                            <span className="sidebar-mini">L1</span>
                            <span className="sidebar-normal">Link 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-mini">L2</span>
                            <span className="sidebar-normal">Link 2</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="sidebar-mini">L3</span>
                            <span className="sidebar-normal">Link 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-mini">L4</span>
                            <span className="sidebar-normal">Link 4</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-mini">L5</span>
                            <span className="sidebar-normal">Link 5</span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
</div>

<div className="main-panel">

<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-minimize">
                        <button id="minimizeSidebar" className="btn btn-warning btn-fill btn-round btn-icon">
<i className="pe-7s-angle-left fs22 visible-on-sidebar-regular"></i>
<i className="pe-7s-angle-right fs22 visible-on-sidebar-mini"></i>

</button>
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
<span className="sr-only">Toggle navigation</span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>
                        <a className="navbar-brand" href="#">Ashghal</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <form className="navbar-form navbar-left navbar-search-form" role="search">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="pe-7s-search fs22"></i></span>
                                <input type="text" value className="form-control" placeholder="Search..." />
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                    <i className="pe-7s-graph1 fs22"></i>
                                    <p>Stats</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-info fs22"></i>
                                    <p className="hidden-md hidden-lg">
                                        Actions
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Create New Post</a></li>
                                    <li><a href="#">Manage Something</a></li>
                                    <li><a href="#">Do Nothing</a></li>
                                    <li><a href="#">Submit to live</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Another Action</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-bell fs22"></i>
                                    <span className="notification">5</span>
                                    <p className="hidden-md hidden-lg">
                                        Notifications
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Notification 1</a></li>
                                    <li><a href="#">Notification 2</a></li>
                                    <li><a href="#">Notification 3</a></li>
                                    <li><a href="#">Notification 4</a></li>
                                    <li><a href="#">Another notification</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-with-icons">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-menu fs22"></i>
                                    <p className="hidden-md hidden-lg">
                                        More
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <ul className="dropdown-menu dropdown-with-icons">
                                    <li>
                                        <a href="#">
                                            <i className="pe-7s-mail"></i> Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="pe-7s-help1"></i> Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="pe-7s-tools"></i> Settings
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <i className="pe-7s-lock"></i> Lock Screen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-danger">
                                            <i className="pe-7s-close-circle"></i> Log out
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="main-content">
                <div className="container-fluid">

                <div className="row">
                        <div className="col-md-12">
                            <div className="card ">
                                <div className="header">
                                    <h4 className="title">Global Sales by Top Locations</h4>
                                    <p className="category">All products that were shipped</p>
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="/img/flags/US.png" /> </div>
                                                            </td>
                                                            <td>USA</td>
                                                            <td className="text-right">
                                                                2.920
                                                            </td>
                                                            <td className="text-right">
                                                                53.23%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../img/flags/DE.png" /> </div>
                                                            </td>
                                                            <td>Germany</td>
                                                            <td className="text-right">
                                                                1.300
                                                            </td>
                                                            <td className="text-right">
                                                                20.43%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../img/flags/AU.png" /> </div>
                                                            </td>
                                                            <td>Australia</td>
                                                            <td className="text-right">
                                                                760
                                                            </td>
                                                            <td className="text-right">
                                                                10.35%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../img/flags/GB.png" /> </div>
                                                            </td>
                                                            <td>United Kingdom</td>
                                                            <td className="text-right">
                                                                690
                                                            </td>
                                                            <td className="text-right">
                                                                7.87%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../img/flags/RO.png" /> </div>
                                                            </td>
                                                            <td>Romania</td>
                                                            <td className="text-right">
                                                                600
                                                            </td>
                                                            <td className="text-right">
                                                                5.94%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../img/flags/BR.png" /> </div>
                                                            </td>
                                                            <td>Brasil</td>
                                                            <td className="text-right">
                                                                550
                                                            </td>
                                                            <td className="text-right">
                                                                4.34%
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                                </div>
                                             
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                            </div>

        </div>
        </div>
        </div>
        <Footer />
        </div>

    )
}