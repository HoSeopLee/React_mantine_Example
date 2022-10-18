import { createStyles } from '@mantine/core';

export const HeaderStyles = createStyles((theme, _params, getRef) => ({
  header: {
    width: '100%',
    paddingRight: 20,
    backgroundColor: 'red',
    padding: '15px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  headerTitle: {
    fontSize: '20px',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      fontSize: '15px',
    },
  },
  headerProfile: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    '@media (max-width: 800px)': {
      display: 'none',
    },
    ':active': {
      opacity: 0.5,
    },
  },
  profileModal: {
    top: 50,
    right: 20,
    position: 'absolute',
    background: 'white',
    borderRadius: 10,
    padding: 10,
    border: '1px solid #ccc',
    '@media (max-width: 800px)': {
      display: 'none',
    },
  },
  profileModalItem: {
    flex: 1,
    display: 'flex',
    padding: '10px 5px',
    color: 'gray',
    fontSize: '15px',
    TextDecoderStream: 'none',
    textDecoration: 'none',
  },
  activeProfileButton: {
    display: 'none',
    '@media (max-width: 800px)': {
      display: 'flex',
    },
  },
  etcButton: {
    display: 'none',
    '@media (max-width: 800px)': {
      display: 'flex',
      position: 'absolute',
      right: 10,
      ':hover': {
        // opacity: 0.5,
      },
      ':active': {
        opacity: 0.5,
      },
    },
  },
  MyProfileButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px',
  },
  sidebar: {
    maxWidth: 260,
    flexShrink: 0,
    backgroundColor: 'rgba(22, 22, 22, 1)',
    height: '500vh',
    overflow: 'auto',
    '@media (max-width: 800px)': {
      display: 'none',
    },
  },
  sidebarItem: {
    padding: '.75em 1em',
    display: 'block',
    transition: 'background-color .15s',
    borderRadius: 5,
    // ':hover': {
    //   backgroundColor: 'rgba(255, 255, 255, .1)',
    // },
  },
  activeSidebarItem: {
    borderRightWidth: 2,
    borderRightColor: 'blue',
  },
  sidebarTitle: {
    display: 'flex',
    fontSize: '1.25rem',
    justifyContent: 'space-between',
  },
  sidebarItemOpen: {
    transform: 'rotate(180deg)',
    height: 'auto',
  },
  sidebarItemPlain: {
    color: '#fff',
    TextDecoderStream: 'none',
    textDecoration: 'none',
  },

  mobileSidebar: {
    display: 'none',
    '@media (max-width: 800px)': {
      display: 'block',
      backgroundColor: '#3d3d3d',
    },
  },
  mobileSidebarItem: {
    flex: 1,
    padding: '.75em 1em',
    display: 'block',
    transition: 'background-color .15s',
    borderRadius: 5,
  },
  mobileSidebarTitle: {
    display: 'flex',
    fontSize: '1.25rem',
    justifyContent: 'space-between',
  },
  mobileSidebarItemPlain: {
    color: '#222',
    TextDecoderStream: 'none',
    textDecoration: 'none',
  },
}));
