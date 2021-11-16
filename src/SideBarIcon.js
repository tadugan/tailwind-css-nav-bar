function SideBarIcon({ icon, text = 'tooltip' }) {
    return (
        <div className='sidebar-icon'>
            {icon}
            <span className='sidebar-tooltip'>{text}</span>
        </div>
    );
}

export default SideBarIcon;
