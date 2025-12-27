import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidee.css';
import { MdOutlineDashboard, MdOutlineTimer, MdOutlineTipsAndUpdates } from "react-icons/md";
import { LuListTodo, LuCalendar1 } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { RiFocus2Line } from "react-icons/ri";
import { FaHeadSideVirus } from "react-icons/fa6";

const Sidee = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const triggerRef = useRef(null);

  const closeMenu = () => {
    setOpen(false);
  };

  // Lock body scroll, focus trap, and ESC to close when open
  useEffect(() => {
    if (!open) {
      // when closing, return focus to the hamburger button
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = sidebarRef.current;
    const focusableSelectors = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = container ? Array.from(container.querySelectorAll(focusableSelectors)) : [];

    // Focus first focusable or container
    const toFocus = (focusables[0] || container);
    if (toFocus && typeof toFocus.focus === 'function') {
      toFocus.focus();
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === 'Tab' && container) {
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !container.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last || !container.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        ref={triggerRef}
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="sidebar-drawer"
      >
        {/* simple hamburger icon */}
        <span className="block w-5 h-0.5 bg-white mb-1" />
        <span className="block w-5 h-0.5 bg-white mb-1" />
        <span className="block w-5 h-0.5 bg-white" />
      </button>

      {/* Backdrop for mobile when menu is open */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidee fixed left-0 top-0 h-screen w-60 bg-white shadow-md p-6 font-medium z-50 ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        tabIndex={-1}
        id="sidebar-drawer"
      >
        <div className="flex items-center justify-between mb-6">
          <p style={{ fontFamily: 'MyFont' }} className='logo text-2xl font-bold'>FOCUS FLOW</p>
          {/* Close button visible only on mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-gray-700">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><MdOutlineDashboard /> DASHBOARD</li>
          </NavLink>
          <NavLink to="/TodoPage" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><LuListTodo /> TO-DO</li>
          </NavLink>
          <NavLink to="/planner" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><LuCalendar1 /> PLANNER</li>
          </NavLink>
          <NavLink to="/pomo" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><MdOutlineTimer /> POMODORO</li>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><GrProjects /> PROJECTS</li>
          </NavLink>
          <NavLink to="/tips" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><MdOutlineTipsAndUpdates /> TIPS</li>
          </NavLink>
          <NavLink to="/chatgpt" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><IoChatboxOutline /> CHATGPT</li>
          </NavLink>
          <NavLink to="/developer" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <li><FaHeadSideVirus /> DEVELOPER</li>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidee;

