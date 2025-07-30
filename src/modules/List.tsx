import { useEffect, useReducer } from 'react';
import { AppShell, Group, Title } from '@mantine/core';
import { ListElement } from '../components/Card/Card';
import { Modal } from '../components/Modal/Modal';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_LIST': {
      return {
        ...state,
        list: action.payload,
      };
    }

    case 'SHOW_MODAL': {
      return {
        ...state,
        modal: action.payload,
      };
    }
  }
}

async function fetchList() {
  const response = await fetch(
    'https://api.spacexdata.com/v3/launches?launch_year=2020'
  );
  const data = await response.json();
  return data;
}

export const List = () => {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    modal: { show: false, card: {} },
  });

  useEffect(() => {
    fetchList().then((data) => {
      dispatch({ type: 'FETCH_LIST', payload: data });
    });
  }, []);

  return (
    <>
      <AppShell header={{ height: 100 }} px={80} py={60}>
        <AppShell.Header className='header' withBorder={false}>
          <Group pt={30} justify="center">
            <Title order={1}>SpaceX Launches 2020</Title>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Group justify="center">
            {state.list.map((el) => (
              <ListElement dispatch={dispatch} data={el} />
            ))}
          </Group>
        </AppShell.Main>
        {state.modal.show && <Modal dispatch={dispatch} data={state.modal.card} />}
      </AppShell>
    </>
  );
};
