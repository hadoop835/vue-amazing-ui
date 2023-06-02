# 图片 Image

<br/>

*可预览的图片*

## 何时使用

- 需要展示图片时
- 加载图片时显示 loading

<script setup lang="ts">
import { ref } from 'vue'
const images = ref([
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg',
    name: 'image-1.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg',
    name: 'image-2.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg',
    name: 'image-3.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg',
    name: 'image-4.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg',
    name: 'image-5.jpg'
  }
])
</script>

## 基本使用

<Image :width="400" :height="300" src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg" />

::: details Show Code

```vue
<template>
  <Image :width="400" :height="300" src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg" />
</template>
```

:::

## 多张图片预览

*可循环切换图片，并支持键盘 (left / right / up / down) 按键切换*

<br/>

<Image :width="400" :height="300" :src="images" loop />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const images = ref([
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg',
    name: 'image-1.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg',
    name: 'image-2.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg',
    name: 'image-3.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg',
    name: 'image-4.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg',
    name: 'image-5.jpg'
  }
])
</script>
<template>
  <Image :width="400" :height="300" :src="images" loop />
</template>
```

:::

## 自定义样式

*预览文本设为 preview，同时图片覆盖容器*

<br/>

<Image :width="600" :height="400" fit="cover" src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg">
  <template #preview>
    <p class="u-pre">preview</p>
  </template>
</Image>

::: details Show Code

```vue
<template>
  <Image :width="600" :height="400" fit="cover" src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg">
    <template #preview>
      <p class="u-pre">preview</p>
    </template>
  </Image>
</template>
```

:::

## 自定义预览配置

*更改缩放比率和最大最小缩放比例*

<br/>

<Image
  :width="400"
  :height="300"
  :zoom-ratio="0.2"
  :min-zoom-scale="0.5"
  :max-zoom-scale="2"
  src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.1/1.jpg" />

::: details Show Code

```vue
<template>
  <Image
    :width="400"
    :height="300"
    :zoom-ratio="0.2"
    :min-zoom-scale="0.5"
    :max-zoom-scale="2"
    src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg" />
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
src | 图像地址 &#124; 图像地址数组 | string &#124; Image[] | '' | true
name | 图像名称，没有传入图片名时自动从图像地址src中读取 | string | '' | false
width | 图像宽度，单位px | string &#124; number | 300 | false
height | 图像高度，单位px | string &#124; number | '100%' | false
fit | 图像如何适应容器高度和宽度，可选 fill(填充)、contain(等比缩放包含)、cover(等比缩放覆盖) | 'contain' &#124; 'fill' &#124; 'cover' | 'contain' | false
preview | 预览文本 | string &#124; slot | '预览' | false
zoomRatio | 每次缩放比率 | number | 0.1 | false
minZoomScale | 最小缩放比例 | number | 0.1 | false
maxZoomScale | 最大缩放比例 | number | 10 | false
resetOnDbclick | 缩放移动旋转图片后，是否可以双击还原 | boolean | true | false
loop | 是否可以循环切换图片 | boolean | false | false

## Image Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
src | 图像地址 | string | true
name | 图像名称 | string | false