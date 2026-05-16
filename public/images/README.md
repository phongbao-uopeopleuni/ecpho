# Image Assets — EC Phở

## Folder Structure

```
public/images/
├── exterior/          # Ảnh ngoại thất nhà hàng (mặt tiền, bảng hiệu, bãi đậu xe)
├── interior/          # Ảnh không gian nội thất (bàn ghế, decor, ambiance)
└── menu/
    ├── appetizers/    # Khai vị (code 1–10.1)
    ├── salads/        # Salad (code 11–15)
    ├── pho/           # Phở (code 16–25, EC1, EC2)
    ├── bun/           # Bún / Vermicelli (code 27–37)
    ├── rice/          # Cơm / Rice Plates (code 39–54)
    ├── fried-rice/    # Cơm chiên / Fried Rice (code 56–61)
    ├── vegetarian/    # Chay / Vegetarian (code 63–67)
    ├── specials/      # House Specials (code 73–S14)
    └── drinks/        # Đồ uống + Beer & Wine (code 89–BW10)
```

## Naming Convention

### Menu items
Đặt tên theo `id` của item trong `src/data/menu.ts`:

```
menu/{category}/{item-id}.jpg
```

Ví dụ:
- `menu/pho/p16.jpg`        → Eye Round Steak Phở (id: p16)
- `menu/pho/p19.jpg`        → House Special Phở (id: p19)
- `menu/appetizers/a1.jpg`  → Vietnamese Egg Rolls (id: a1)
- `menu/drinks/d89.jpg`     → Vietnamese Iced Coffee (id: d89)
- `menu/specials/hs73.jpg`  → Pad Thai (id: hs73)

### Exterior / Interior
Đặt tên mô tả, dùng kebab-case:

```
exterior/front-entrance.jpg
exterior/sign-night.jpg
interior/dining-room.jpg
interior/bar-area.jpg
```

## Cách dùng trong code

```ts
// Menu item image (từ item.id)
const imgSrc = `/images/menu/{category}/{item.id}.jpg`

// Exterior
const imgSrc = `/images/exterior/front-entrance.jpg`
```

## Định dạng khuyến nghị
- Format: **WebP** (ưu tiên) hoặc JPG
- Menu items: 800×600px, tối đa 150KB
- Exterior/Interior: 1200×800px, tối đa 300KB
