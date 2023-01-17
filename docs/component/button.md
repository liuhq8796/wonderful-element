# Button 按钮

常用的操作按钮。

## 基础用法

<script setup>
import { WeButton } from 'wonderful-element'
import 'wonderful-element/dist/style.css'
</script>

使用 type、plain、round 和 circle 来定义按钮的样式。

<div>
    <we-button>Default</we-button>
    <we-button type="primary">Primary</we-button>
    <we-button type="success">Success</we-button>
    <we-button type="info">Info</we-button>
    <we-button type="warning">Warning</we-button>
    <we-button type="danger">Danger</we-button>
</div>