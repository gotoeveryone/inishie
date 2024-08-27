<script lang="ts">
export let max: number;
export let hitNumber: number;

const hintLabel = () => {
	if (hitNumber === max) {
		return "一番大きい数";
	}
	if (hitNumber % 3 === 0) {
		return "3で割れる数字です";
	}
	if (hitNumber % 2 === 0) {
		return "偶数かも…？";
	}
	return "奇数かも…？";
};
</script>

<div class="mx-auto mt-1 mb-3 max-w-[400px]">
  <div class="font-bold text-lg">↓↓↓ヒント↓↓↓</div>
  <div class="mt-[200px] text-transparent selection:bg-gray-600 selection:text-white">{hintLabel()}</div>
</div>
