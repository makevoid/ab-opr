# API Draft


## v0.7

### Account API

```
GET /account/{account_id}/signatures?limit={limit}&offset={offset}

[{
  id: "<uuid>",
  signature: "...",
  meta: {
    block: "0..abcde", // hex string
    block_number: "123123", // string (number)
    created_at: "<unix-timestamp>" // block timestamp
    eth_block: "0x123123", // hex string
    eth_block_number: "123123", // string (number)
    eth_block timestamp: "<unix-timestamp>" 
  },
}, {
  id: "<uuid>",
  signature: "...",
  meta: {
    block: "0..abcde", // hex string
    block_number: "123123", // string (number)
    created_at: "<unix-timestamp>" // block timestamp
    eth_block: "0x123123", // hex string
    eth_block_number: "123123", // string (number)
    eth_block timestamp: "<unix-timestamp>" 
  },
}]
```


```
POST /account/{account_id}/signatures

{
  signature: "..."
}

---

{
  id: "",
  message: "The signature has been saved correctly"
}
```


---

## v0.8


### Account API

(same as 0.7)

```
GET /account/{account_id}/signatures?limit={limit}&offset={offset}

[{
  id: "<uuid>",
  signature: "...",
  meta: {
    block: "0..abcde", // hex string
    block_number: "123123", // string (number)
    created_at: "<unix-timestamp>" // block timestamp
    eth_block: "0x123123", // hex string
    eth_block_number: "123123", // string (number)
    eth_block timestamp: "<unix-timestamp>" 
  },
}, {
  id: "<uuid>",
  signature: "...",
  meta: {
    block: "0..abcde", // hex string
    block_number: "123123", // string (number)
    created_at: "<unix-timestamp>" // block timestamp
    eth_block: "0x123123", // hex string
    eth_block_number: "123123", // string (number)
    eth_block timestamp: "<unix-timestamp>" 
  },
}]
```


```
POST /account/{account_id}/signatures

{
  signature: "..."
}

---

{
  id: "<uuid>",
  message: "The signature has been submitted"
}
```


### Admin API


```
GET /signatures?limit={limit}&offset={offset}

[{
  id: "<uuid>"
  signature: "..."
}, {
  id: "<uuid>"
  signature: "..."
}]
```


### Admin / Moderator API


```
POST /signatures/{signature_id}/unpublish

null

---

{
  success: true,
  message: "The signature has been unpublished"
}
```
