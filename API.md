# API Draft


## v0.7

### User API

```
GET /account/{account_id}/signatures?limit={limit}&offset={offset}

[{
  id: "<uuid>"
  signature: "..."
}, {
  id: "<uuid>"
  signature: "..."
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
