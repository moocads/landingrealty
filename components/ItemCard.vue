<template>
  <div class="card-container">
    <img class="image" :class="{article:hideTag}" :src="img" :alt="title" />
    <div class="details">
      <span class="region-tag" v-if="!hideTag">
        {{ locations[tag].en }}
      </span>
      <div class="eye" v-if="!hideTag">
        <svg
          width="41"
          height="30"
          viewBox="0 0 45 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.4353 14.7757C43.451 16.1043 43.451 17.8979 42.4353 19.2243C39.236 23.4007 31.5603 32 22.5989 32C13.6374 32 5.96172 23.4007 2.76244 19.2243C2.26826 18.5881 2 17.8055 2 17C2 16.1945 2.26826 15.4119 2.76244 14.7757C5.96172 10.5993 13.6374 2 22.5989 2C31.5603 2 39.236 10.5993 42.4353 14.7757V14.7757Z"
            stroke="#C8C8C8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.599 23.4284C26.1494 23.4284 29.0276 20.5503 29.0276 16.9999C29.0276 13.4495 26.1494 10.5713 22.599 10.5713C19.0486 10.5713 16.1704 13.4495 16.1704 16.9999C16.1704 20.5503 19.0486 23.4284 22.599 23.4284Z"
            stroke="#C8C8C8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="info">
        <h3 :class="{ smallTitle: hideTag }">{{ title ? title : '' }}</h3>
        <!-- <p><span v-if="!hideTag">$ </span>{{ content }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import locations from '~/utils/locations'

export default {
  props: {
    img: { default: 'sample-img.png', type: String },
    tag: String,
    title: String,
    content: String,
    hideTag: { type: Boolean, default: false },
  },
  data() {
    return {
      locations
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  width: 100%;

  .image {
    width: 100%;
    height: auto;
    filter: grayscale(1);
    transition: all 0.5s ease;
    height: 500px;
    object-fit: cover;

    &.article {
      height: 300px;
    }
  }

  &:hover {
    .image {
      filter: grayscale(0)
    }

    .eye {
      opacity: 1;
    }
  }
}

.details {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  .region-tag {
    text-transform: uppercase;
    font-size: 16px;
    background-color: black;
    padding: 0.25rem 1rem;
    color: white;
    position: absolute;
    top: 20px;
  }
  .eye {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background: rgba(11, 44, 66, 0.73);
    border-radius: 100%;
    color: #c8c8c8;
    transition: all 0.5s ease;
    opacity: 0;
  }
  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3rem 1rem 0.75rem 1rem;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(11, 44, 66, 0) 0%, #0b2c42 72.4%);
    h3 {
      color: white;
      font-weight: 700;
      font-size: 22px;
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
    p {
      font-size: 16px;
      color: white;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
  }
}
.smallTitle {
  font-size: 16px !important;
  text-transform: none !important;
}
</style>
