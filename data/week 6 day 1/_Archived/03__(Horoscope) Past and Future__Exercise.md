---
uuid: 7d45ee5f-a178-48fb-b4fe-059592ca2bb9
archived: true
---

The API we're using to pull horoscopes for our users also lets us search for tomorrow's horoscope,
and yesterday's horoscope.

## Tomorrow

```javascript
GET /api/horoscope/{sunsign}/tomorrow
```

## Yesterday

```javascript
GET /api/horoscope/{sunsign}/Yesterday
```


## Tasks

- [ ] Add a way for users to search for yesterday's horoscope
- [ ] Add a way for users to search for tomorrow's horoscope
