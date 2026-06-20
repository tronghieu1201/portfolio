<script setup lang="ts">
import Social from "./Social.vue";
import Link from "./Link.vue";
import Clickable from "./Clickable.vue";
import NotchSection from "./NotchSection.vue";
import { t } from "../i18n/utils/translate";
import { locale } from "../i18n/store";
import ButtonRound from "./ButtonRound.vue";
import { lenis } from "../composables/useScroll";
import ArrowRightLong from "./icons/ArrowRightLong.vue";
import { withBasePath } from "../utils/basePath";
import { ref, onMounted } from "vue";

interface Props {
  withSocial?: boolean;
}

const handleBackToTop = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const { withSocial = true } = defineProps<Props>();

const visitorCount = ref<number | null>(null);
const visitorError = ref(false);

const fetchVisitorCount = async () => {
  try {
    const response = await fetch("https://76flfqchaf.execute-api.ap-southeast-2.amazonaws.com/visitor");

    if (!response.ok) {
      throw new Error("Failed to fetch visitor count");
    }

    const data = await response.json();
    visitorCount.value = data.count;
  } catch (error) {
    visitorError.value = true;
    console.error("Visitor counter error:", error);
  }
};

onMounted(() => {
  fetchVisitorCount();
});
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <div
        class="footer-back-to-top"
        tabindex="0"
        @click="handleBackToTop"
        @keydown.enter="handleBackToTop"
        data-cursor="circle-white"
      >
        <ButtonRound renderAs="div" variant="border" class="children-unclickable">
          <ArrowRightLong class="footer-back-to-top-icon" />
        </ButtonRound>
      </div>
      <div class="footer-top">
        <Social v-if="withSocial" />
        <div class="footer-top-links">
          <div class="footer-top-links-legal">
            <Clickable renderAs="div">
              <Link
                :href="withBasePath(locale === 'de' ? '/de/privacy' : '/privacy')"
                class="footer-link"
                :external="true"
                data-cursor="circle-white"
                >{{ t("privacy") }}</Link
              >
            </Clickable>
            <Clickable renderAs="div">
              <Link
                :href="withBasePath(locale === 'de' ? '/de/legal' : '/legal')"
                class="footer-link children-unclickable"
                :external="true"
                data-cursor="circle-white"
                >{{ t("legal") }}</Link
              >
            </Clickable>
          </div>
        </div>
      </div>
      <div class="footer-credits">
        <p>© {{ new Date().getFullYear() }} Trọng Hiếu</p>
        <p v-if="visitorCount !== null" class="footer-visitors">Lượt truy cập: {{ visitorCount }}</p>
        <p v-else-if="visitorError" class="footer-visitors">Không tải được lượt truy cập</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    width: 100%;
    max-width: calc(var(--breakpoint-xxxl));
    padding: calc(var(--space-outer) + var(--space-sm)) var(--space-outer);
    position: relative;
  }

  &-back-to-top {
    cursor: pointer;

    @include mixins.mq("md") {
      position: absolute;
      top: calc(var(--space-outer) + var(--space-sm));
      left: 50%;
      transform: translateX(-50%);
    }

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-xl);

    @include mixins.mq("md") {
      gap: var(--space-md);
      flex-direction: row;
    }

    &-links {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: var(--space-md);

      &-legal {
        display: flex;
        flex-direction: row;
        gap: var(--space-md);
      }

      @include mixins.mq("md") {
        gap: var(--space-lg);
        flex-direction: row;
        position: relative;
        margin-left: auto;
      }
    }
  }

  &-link {
    font-weight: 700;
  }

  &-credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    width: 100%;
    font-size: var(--font-size-sm);
    text-align: center;
  }

  &-visitors {
    color: var(--color-text-300);
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }
}
</style>
