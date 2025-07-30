import { Card, CloseButton, Group, Image, Stack, Text } from '@mantine/core';
import placeholder from '../../../public/spaceXPlaceholder.png';
import { createPortal } from 'react-dom';
import './Modal.css';

export const Modal = ({ data, dispatch }) => {
  return createPortal(
    <>
    <Card className="modal">
      <Group justify="space-between">
        <Text>{data.mission_name}</Text>
        <CloseButton
          onClick={() => {
            document.body.classList.remove('no-scroll');
            dispatch({
              type: 'SHOW_MODAL',
              payload: {
                show: false,
                card: data,
              },
            });
          }}
        />
      </Group>
      <Stack my={20} align="center">
        <Card.Section>
        {data.links.mission_patch_small === null ? (
            <Image className='image-spaceX' alt="Mission image" w={250} h={250} src={placeholder} />
          ) : (
            <Image
              alt="Mission image"
              w={250}
              h={250}
              src={data.links.mission_patch_small}
            />
          )}
        </Card.Section>
      </Stack>
      <Stack mb={10} gap={0}>
        <Text fw={700}>Mission name:</Text>
        <Text>{data.mission_name}</Text>
      </Stack>
      <Stack mb={10} gap={0}>
        <Text fw={700}>Rocket name:</Text>
        <Text>{data.rocket.rocket_name}</Text>
      </Stack>
      <Stack mb={10} gap={0}>
        <Text fw={700}>Details:</Text>
        <Text>{data.details}</Text>
      </Stack>
    </Card>
    <div className='overlay'></div>
    </>,
    document.body
  );
};
