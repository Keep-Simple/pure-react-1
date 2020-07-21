export const createMessageFromAdmin = text => (
  {
    name: 'Keep Simple',
    text,
    date: new Date(),
    user_id: '12345',
    id: Math.random() * 100,
    avatar: 'https://robohash.org/quamestlaborum.png?size=50x50&set=set1'
  }
);

const adminInfo = {
  name: 'Keep Simple',
  user_id: '12345',
  avatar: 'https://robohash.org/quamestlaborum.png?size=50x50&set=set1'
}

export default adminInfo;
