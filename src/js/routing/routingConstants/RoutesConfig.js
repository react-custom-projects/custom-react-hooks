//URLs
import {
	getArrayPageUrl,
	getCopyToClipboardPageUrl,
	getDocumentTitlePageUrl,
	getEventListenerPageUrl,
	getFetchPageUrl,
	getHomePageUrl,
	getIntervalPageUrl,
	getMobileDetectPageUrl,
	getPageBottomPageUrl,
	getTiltPageUrl,
	getWindowSizePageUrl,
} from './AppUrls';
//pages
import MagnifyHookPage from '../../containers/pages/MagnifyHookPage';
import TiltHookPage from '../../containers/pages/TiltHookPage';
import IntervalHookPage from '../../containers/pages/IntervalHookPage';
import CopyToClipboardHookPage from '../../containers/pages/CopyToClipboardHookPage';
import PageBottomHookPage from '../../containers/pages/PageBottomHookPage';
import WindowSizeHookPage from '../../containers/pages/WindowSizeHookPage';
import MobileDetectHookPage from '../../containers/pages/MobileDetectHookPage';
import DocumentTitleHookPage from '../../containers/pages/DocumentTitleHookPage';
import ArrayHookPage from '../../containers/pages/ArrayHookPage';
import FetchHookPage from '../../containers/pages/FetchHookPage';
import EventListenerHookPage from '../../containers/pages/EventListenerHookPage';

export const routes = [
	{
		path: getHomePageUrl(),
		Component: MagnifyHookPage,
		label: 'Magnify',
	},
	{
		path: getTiltPageUrl(),
		Component: TiltHookPage,
		label: 'Tilt',
	},
	{
		path: getIntervalPageUrl(),
		Component: IntervalHookPage,
		label: 'Interval',
	},
	{
		path: getCopyToClipboardPageUrl(),
		Component: CopyToClipboardHookPage,
		label: 'Copy to clipboard',
	},
	{
		path: getPageBottomPageUrl(),
		Component: PageBottomHookPage,
		label: 'Page bottom',
	},
	{
		path: getWindowSizePageUrl(),
		Component: WindowSizeHookPage,
		label: 'Window size',
	},
	{
		path: getMobileDetectPageUrl(),
		Component: MobileDetectHookPage,
		label: 'Mobile detect',
	},
	{
		path: getDocumentTitlePageUrl(),
		Component: DocumentTitleHookPage,
		label: 'Document title',
	},
	{
		path: getArrayPageUrl(),
		Component: ArrayHookPage,
		label: 'Array',
	},
	{
		path: getFetchPageUrl(),
		Component: FetchHookPage,
		label: 'Fetch',
	},
	{
		path: getEventListenerPageUrl(),
		Component: EventListenerHookPage,
		label: 'Event listener',
	},
];
