import { Box, Button, Card, Image, Stack, Text } from '@mantine/core';
import placeholder from '../../../public/spaceXPlaceholder.png';
import './Card.css';

export const ListElement = ({ data, dispatch }) => {
  return (
    <Card
      className="card"
      pt={50}
      w={250}
      h={300}
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
    >
      <Stack className="card">
        <Card.Section>
          {data.links.mission_patch_small === null ? (
            <Image className='image-spaceX' alt="Mission image" w={100} h={100} src={placeholder} />
          ) : (
            <Image
              alt="Mission image"
              w={100}
              src={data.links.mission_patch_small}
            />
          )}
        </Card.Section>
        <Box className="text" w={200}>
          <Text truncate="end">{data.mission_name}</Text>
        </Box>
        <Text c="dimmed">{data.rocket.rocket_name}</Text>
      </Stack>
      <Button
        onClick={() => {
          document.getElementById('root').classList.add('no-scroll');
          dispatch({
            type: 'SHOW_MODAL',
            payload: {
              show: true,
              card: data,
            },
          });
        }}
        w="100%"
        variant="filled"
        radius="md"
      >
        See more
      </Button>
    </Card>
  );
};
