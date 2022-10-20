// import Header from '@components/Header';
import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  Container,
  Grid,
  Text,
} from '@mantine/core';
import React, { useCallback, useState } from 'react';
import NavbarCompoents from './Components/NavbarCompoents';
import styled from '@emotion/styled';
import Header from './Components/Header';
import MobileMenu from './Components/MobileMenu';
import { api } from './Api';
import { useInfiniteQuery } from '@tanstack/react-query';

const Containers = styled('div')`
  display: flex;
`;
const View = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: red;
`;

const useStyles = createStyles((theme) => ({
  navbar: {
    display: 'flex',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  activeNavbar: {
    display: 'block',
  },
  textStyle: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    overflowWrap: 'break-word',
    background: 'blue',
  },
}));

const Layout = () => {
  const [open, setOpen] = useState(false);
  const { classes, cx } = useStyles();

  const _editOpen = useCallback(() => {
    setOpen((data) => {
      return !data;
    });
  }, []);
  const fetchPhotos = async (pageParams: number) => {
    console.log(pageParams);
    const { data } = await api.get(
      `/albums?_start=${(pageParams - 1) * 10}&_limit=10`
    );
    if (data.length < 10) return { result: data, nextPage: undefined };

    return {
      result: data,
      nextPage: pageParams + 1,
    };
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['photos'],
      async ({ pageParam = 1 }) => {
        return await fetchPhotos(pageParam);
      },
      {
        // Options
      }
    );
  return (
    <Containers>
      {/* <Header /> */}
      <div className={cx(classes.navbar)}>
        <NavbarCompoents />
      </div>
      <View>
        <Header
          editOpen={_editOpen}
          open={open}
          tabs={[]}
          user={{
            name: 'Name',
            image:
              'data:image/jpeg;base64,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',
          }}
        />
        {open && <MobileMenu open={open} />}

        <Text
          onClick={() => {
            console.log('1231');
            fetchNextPage();
          }}
          className={classes.textStyle}
          weight={500}
        >
          Semibold asdfasdf12312312312321231231231 Semibold1231231231231123123
          asdfasdf12312312312321231231231 Semibold
          asdfasdf12312312312321231231231 Semibold Semibold Semibold
          asdfasdf12312312312321231231231 asdfasdf12312312312321231231231
          Semibold asdfasdf12312312312321231231231
          asdfasdf12312312312321231231231
        </Text>
        {/* {data?.pages.map(
          (page) => (
            <>{console.log(page)}</>
          )
          // <Text>{page?.title}</Text>
        )} */}
        {data?.pages.map((page: any, i) => {
          return (
            <React.Fragment key={i}>
              {page?.data?.map((photo: any) => (
                <Text>
                  {console.log(photo)} {page?.title}
                </Text>
              ))}
            </React.Fragment>
          );
        })}
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
        <Text>asdfasdf123123123123213</Text>
      </View>
    </Containers>
  );
};

export default Layout;
