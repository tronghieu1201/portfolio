<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Button from "./Button.vue";
import Clickable from "./Clickable.vue";

interface Props {
  isOpen?: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  title: "Thông báo",
  message: "Hoàng Sa & Trường Sa là của Việt Nam",
  confirmText: "OK là của Việt Nam",
});

const emit = defineEmits<{
  (e: "confirm"): void;
  (e: "close"): void;
}>();

const handleConfirm = () => {
  emit("confirm");
};

const handleClose = () => {
  emit("close");
};

// Prevent scroll when modal is open
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="handleClose">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
        </div>
        <div class="modal-body">
          <p class="modal-message">{{ message }}</p>
        </div>
        <div class="modal-footer">
          <Clickable renderAs="div">
            <Button @click="handleConfirm" class="modal-button">{{ confirmText }}</Button>
          </Clickable>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

.modal-content {
  background-color: #da291c;
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
  border: 3px solid #000;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @include mixins.mq("md") {
    padding: var(--space-xl);
    max-width: 500px;
  }
}

.modal-header {
  margin-bottom: var(--space-lg);
}

.modal-title {
  font-size: var(--font-size-title-sm);
  font-weight: 900;
  color: #ffd700;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.modal-body {
  margin-bottom: var(--space-lg);
}

.modal-message {
  font-size: var(--font-size-md);
  color: #ffd700;
  text-align: center;
  line-height: 1.6;
  margin: 0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.modal-button {
  width: 100%;
  cursor: pointer;
  background-color: #ffd700 !important;
  color: #000 !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  border: 2px solid #000 !important;
  letter-spacing: 0.5px !important;

  &:hover {
    background-color: #ffed4e !important;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5) !important;
  }

  @include mixins.mq("md") {
    width: auto;
    min-width: 200px;
  }
}
</style>
