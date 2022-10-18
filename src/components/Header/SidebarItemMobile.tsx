import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyles } from './header.style';

export default function SidebarItemMobile({ item }: any) {
  const { classes, cx } = HeaderStyles();
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={`${classes.mobileSidebarItem}`}>
        <div className={`${classes.mobileSidebarTitle} `}>
          <span className={` ${classes.mobileSidebarItemPlain} `}>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i
            className={cx(classes.mobileSidebarItemPlain, {
              [classes.sidebarItemOpen]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            헹
          </i>
        </div>

        {open && (
          <div className={`${classes.sidebarItem} `}>
            {item.childrens.map((child: any, index: any) => (
              <SidebarItemMobile key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        className={`${classes.mobileSidebarItem} ${classes.mobileSidebarItemPlain} `}
        to={`#`}
      >
        123123
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
    );
  }
}
