import React from 'react';
import { Avatar, Box, Text } from 'zmp-ui';

const UserCard = ({ user }) => {
  return (
    <Box className="text-white" flex>
      <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar>
      <Box ml={4}>
      <Text>Xin chào,</Text>
        <Text.Title>{user.name}</Text.Title>
      </Box>
    </Box>
  )
};

export default UserCard;