import React from "react";
import "./sideBar.css";
import navList from "../../data/navItem";
import NavItem from "../header/NavItem";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar() {

  const navigate = useNavigate()

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/portal/dashboard" ><i className="bi bi-grid"></i><span>Dashboard</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#"><i className="bi bi-menu-button-wide"></i><span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Customers</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Suppliers</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Logistic</span></Link>
            </li>


          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#inventory-nav" data-bs-toggle="collapse" href="#"><i className="bi bi-menu-button-wide"></i><span>Inventory</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="inventory-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/portal/useractivatedeactivate" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>User Activate/Deactivate</span></Link>
            </li>
            <li> 
              <Link to="/portal/adduser"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Add User</span></Link>
            </li>
            <li>
              <Link to="/portal/assignrepresentative"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Assign Representative</span></Link>
            </li>
            <li>
              <Link to="/portal/itemmaster" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Item Master</span></Link>
            </li>
            <li> 
              <Link to="/portal/categorywithpoints"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Category with Points</span></Link>
            </li>
            <li>
              <Link to="/portal/segmentmaster"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Segment Master</span></Link>
            </li>
            <li>
              <Link to="/portal/credittermmaster" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Credit Term Master</span></Link>
            </li>
            <li> 
              <Link to="/portal/addretailerstock"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Add Retailer Stock</span></Link>
            </li>
            <li>
              <Link to="/portal/paymentapproval"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Payment Approval</span></Link>
            </li>
            <li>
              <Link to="/portal/giftitemmaster" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Gift Item Master</span></Link>
            </li>
            <li> 
              <Link to="/portal/redeemgiftapproval"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Redeem Gift Approval</span></Link>
            </li>
            <li>
              <Link to="/portal/allDSRdaykeyroute"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>All DSR Day Key Route</span></Link>
            </li>
            <li>
              <Link to="/portal/itemrequest"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Item Request</span></Link>
            </li>
            <li>
              <Link to="/portal/visiting" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Visiting</span></Link>
            </li>
            <li> 
              <Link to="/portal/paymententry"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Payment Entry</span></Link>
            </li>
            <li>
              <Link to="/portal/billingtomechanic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Billing to Mechanic</span></Link>
            </li>


          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#reports-nav" data-bs-toggle="collapse" href="#"><i className="bi bi-menu-button-wide"></i><span>Reports</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="reports-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Representative List</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Retailers List</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Mechanic List</span></Link>
            </li>
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>DSRwise Retailers Outstanding Report</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Sales Report</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Receipt Report</span></Link>
            </li>
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Lines per Dealer Report</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Retailers Account Statement</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Representative Visiting History</span></Link>
            </li>
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>DSR Day Report</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>DSR Daywise Collection Report</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>DSR Daywise Sales Report</span></Link>
            </li>
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Retailer Request Report</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Itemwise Retailer Request Report</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Invoice History</span></Link>
            </li>
            <li>
              <Link to="/portal/customer" style={{ textDecoration:"none"}} ><i className="bi bi-circle"></i><span>Payment History</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Mechanic Sales Report</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Mechanic Itemwise Sales Report</span></Link>
            </li>
            <li> 
              <Link to="/portal/supplier"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Loyalty Mechanic Sales Report</span></Link>
            </li>
            <li>
              <Link to="/portal/logistic"  style={{ textDecoration:"none"}}><i className="bi bi-circle"></i><span>Mechanic Loyalty Report</span></Link>
            </li>

          </ul>
        </li>
        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
            style={{ textDecoration:"none"}}
          >
            <i className="bi bi-journal-text"></i>

            <span>Forms</span>

            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Application Form</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Release Form</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
            style={{ textDecoration:"none"}}
          >
            <i className="bi bi-layout-text-window-reverse"></i>

            <span>Tables</span>

            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>General Tables</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
            style={{ textDecoration:"none"}}
          >
            <i className="bi bi-bar-chart"></i>

            <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Chart.js</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i> <span>ApexCharts</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>ECharts</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
            style={{ textDecoration:"none"}}
          >
            <i className="bi bi-gem"></i>

            <span>Icons</span>

            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="icons-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Bootstrap Icons</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Remix Icons</span>
              </a>
            </li>

            <li>
              <a href="#" style={{ textDecoration:"none"}}>
                <i className="bi bi-circle"></i>

                <span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li> */}

        <li className="nav-heading">PAGES</li>
        {navList.map((nav)=> (
            <NavItem key={nav._id}  nav={nav}/>
        ))}
      </ul>
    </aside>
  );
}
