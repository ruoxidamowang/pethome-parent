// 按需加载element
import {
	ElAlert,
	ElAside,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElButton,
	ElButtonGroup,
	ElCalendar,
	ElCard,
	ElCarousel,
	ElCarouselItem,
	ElCascader,
	ElCascaderPanel,
	ElCheckbox,
	ElCheckboxButton,
	ElCheckboxGroup,
	ElCol,
	ElCollapse,
	ElCollapseItem,
	ElCollapseTransition,
	ElColorPicker,
	ElContainer,
	ElDatePicker,
	ElDialog,
	ElDivider,
	ElDrawer,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElFooter,
	ElForm,
	ElFormItem,
	ElHeader,
	ElIcon,
	ElImage,
	ElInfiniteScroll,
	ElInput,
	ElInputNumber,
	ElLink,
	ElLoading,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElMessage,
	ElMessageBox,
	ElNotification,
	ElOption,
	ElOptionGroup,
	ElPageHeader,
	ElPagination,
	ElPopconfirm,
	ElPopover,
	ElPopper,
	ElProgress,
	ElRadio,
	ElRadioButton,
	ElRadioGroup,
	ElRate,
	ElRow,
	ElScrollbar,
	ElSelect,
	ElSlider,
	ElStep,
	ElSteps,
	ElSubmenu,
	ElSwitch,
	ElTable,
	ElTableColumn,
	ElTabPane,
	ElTabs,
	ElTag,
	ElTimeline,
	ElTimelineItem,
	ElTimePicker,
	ElTimeSelect,
	ElTooltip,
	ElTransfer,
	ElTree,
	ElUpload
} from 'element-plus'
import locale from 'element-plus/lib/locale'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import ElementConfig from './element.config'

// element全局配置项
const { size, zIndex } = ElementConfig

// 设置语言
locale.use(lang)

const components = [
	ElAlert,
	ElAside,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElButton,
	ElButtonGroup,
	ElCalendar,
	ElCard,
	ElCarousel,
	ElCarouselItem,
	ElCascader,
	ElCascaderPanel,
	ElCheckbox,
	ElCheckboxButton,
	ElCheckboxGroup,
	ElCol,
	ElCollapse,
	ElCollapseItem,
	ElCollapseTransition,
	ElColorPicker,
	ElContainer,
	ElDatePicker,
	ElDialog,
	ElDivider,
	ElDrawer,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElFooter,
	ElForm,
	ElFormItem,
	ElHeader,
	ElIcon,
	ElImage,
	ElInput,
	ElInputNumber,
	ElLink,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElOption,
	ElOptionGroup,
	ElPageHeader,
	ElPagination,
	ElPopconfirm,
	ElPopover,
	ElPopper,
	ElProgress,
	ElRadio,
	ElRadioButton,
	ElRadioGroup,
	ElRate,
	ElRow,
	ElScrollbar,
	ElSelect,
	ElSlider,
	ElStep,
	ElSteps,
	ElSubmenu,
	ElSwitch,
	ElTabPane,
	ElTable,
	ElTableColumn,
	ElTabs,
	ElTag,
	ElTimePicker,
	ElTimeSelect,
	ElTimeline,
	ElTimelineItem,
	ElTooltip,
	ElTransfer,
	ElTree,
	ElUpload
]

const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox, ElNotification]

export function setupElementPlus(app) {
	components.forEach(component => {
		app.component(component.name, component)
	})

	plugins.forEach(plugin => {
		app.use(plugin)
	})

	// 全局配置
	app.config.globalProperties.$ELEMENT = { size: size, zIndex: zIndex }

	window.$success = function(msg) {
		ElMessage({
			type: 'success',
			message: msg,
			duration: 2000
		})
	}

	// 失败消息提示
	window.$error = function(msg) {
		ElMessage({
			type: 'error',
			message: msg,
			duration: 2500
		})
	}
}
