export default (req, res) => {
  res.status(200).json({
    name: '双鱼',
    age: 100,
    desc: '写后端的接口，让后端无接口可写'
  });
};
