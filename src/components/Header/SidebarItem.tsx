import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyles } from './header.style';

export default function SidebarItem({ item }: any) {
  const { classes, cx } = HeaderStyles();

  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={`${classes.sidebarItem}`}>
        <div className={`${classes.sidebarTitle} `}>
          <span className={` ${classes.sidebarItemPlain} `}>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i
            className={cx(classes.sidebarItemPlain, {
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
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        className={`${classes.sidebarItem} ${classes.sidebarItemPlain} `}
        to={`#`}
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
    );
  }
}
