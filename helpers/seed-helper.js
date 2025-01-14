const randomNumber = (arr, amount = 1) => {
  const number = arr[Math.floor(Math.random() * arr.length)]
  const index = arr.indexOf(number)
  arr.splice(index, 1)
  const randomNumber = Math.floor(number / amount)
  return randomNumber
}

const userIndex = (i, userLength) => {
  if (i < userLength) {
    return i
  } else {
    return Math.floor(Math.random() * userLength)
  }
}

const followingArr = (users, followingNumber) => {
  const arr = []
  users.forEach(user => {
    const randomIdA = user.id
    let usersOther = users.filter(user => user.id !== randomIdA)
    for (let i = 0; i < followingNumber / users.length; i++) {
      const randomIdB = usersOther[Math.floor(Math.random() * usersOther.length)].id
      usersOther = usersOther.filter(user => user.id !== randomIdB)
      arr.push({ randomIdA: randomIdA, randomIdB: randomIdB })
    }
  })
  return arr
}

const likeArr = (users, tweets, likeNumber) => {
  const arr = []
  let tweetsOther = tweets
  users.forEach(user => {
    const userId = user.id
    for (let i = 0; i < likeNumber; i++) {
      const tweetId = tweets[Math.floor(Math.random() * tweets.length)].id
      tweetsOther = tweetsOther.filter(tweet => tweet.id !== tweetId)
      arr.push({ userId: userId, tweetId: tweetId })
    }
  })
  return arr
}

const randomDate = (start, end) => {
  return new Date(start.valueOf() + Math.ceil(Math.random() * (end.valueOf() - start.valueOf())))
}

module.exports = {
  randomNumber,
  userIndex,
  followingArr,
  likeArr,
  randomDate
}
