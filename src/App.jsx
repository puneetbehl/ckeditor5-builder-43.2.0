import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import './App.css';

export default function App() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'showBlocks',
				'|',
				'heading',
				'style',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertImage',
				'insertTable',
				'highlight',
				'blockQuote',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'outdent',
				'indent'
			],
			shouldNotGroupWhenFull: true
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			BlockQuote,
			Bold,
			Code,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
			Highlight,
			HorizontalLine,
			HtmlComment,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			// Markdown,
			MediaEmbed,
			Mention,
			PageBreak,
			Paragraph,
			PasteFromMarkdownExperimental,
			PasteFromOffice,
			RemoveFormat,
			SelectAll,
			ShowBlocks,
			SimpleUploadAdapter,
			SourceEditing,
			SpecialCharacters,
			SpecialCharactersArrows,
			SpecialCharactersCurrency,
			SpecialCharactersEssentials,
			SpecialCharactersLatin,
			SpecialCharactersMathematical,
			SpecialCharactersText,
			Strikethrough,
			Style,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			Underline,
			Undo
		],
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage'
			]
		},
		initialData:
			'<h2 class="document-title">Handheld emperor</h2><p>Nintendo, a Japanese electronics company, started as a <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Hanafuda"><i>hanafuda</i> cards</a> manufacturer in 1889. In the mid-1970s, they entered the early video games market and became famous for their home video and handheld game consoles. Nintendo introduced consoles like the<strong>NES</strong>,<strong>SNES</strong>, and<strong>Wii</strong>. But the most revolutionary was for sure the<strong>Game Boy</strong>.</p><h3 class="document-subtitle">A countdown of Nintendo handhelds</h3><figure class="image image_resized image-style-align-right" style="width:17.33%"><img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/game_boy.jpg" width="384" sizes="100vw"><figcaption>The Nintendo "flagship" - handheld Game Boy</figcaption></figure><ol><li><span style="color:#e54c4c"><strong>Game &amp; Watch</strong></span>was Nintendo\'s first product offering out-of-home gaming. From 1980 to 1991, over a hundred games were released, gaining great popularity.</li><li>In 1989, &nbsp;the original<span style="color:#e54c4c"><strong>Game Boy</strong></span>was released. The amazing new machine utilized a cartridge system, allowing the users to play a multitude of games of all kinds. This was<mark class="marker-yellow">a historical game-changer</mark>. &nbsp;<ol><li>It was followed by a number of versions, such as Game Boy Color or Game Boy Advance.</li></ol></li><li>In 2004, Nintendo introduced a new console family called the<span style="color:#e54c4c"><strong>Nintendo DS</strong></span>. It sported a dual LCD screen in a folded shell, with the lower one being a touchscreen.<ol><li>The most prominent development was Nintendo 3DS, which offered a 3D display.</li></ol></li><li>2017 brought the hybrid experience for both couch-preferring gamers and handheld enthusiasts with the release of the<span style="color:#e54c4c"><strong>Nintendo Switch</strong></span>. It offers both a TV mode with high-definition graphics and a handheld mode using the built-in 6.2" display.&nbsp;</li></ol><h3 class="document-subtitle">Handheld consoles\' popularity</h3><p>While the most recent Switch is a prevalent choice nowadays, the 2DS and 3DS consoles are still popular. The king, however, is none other than the original wonder — the Game Boy.</p><figure class="table"><table><tbody><tr><td style="background-color:#999"><span style="color:#e5e54c">Console</span></td><td style="background-color:#999"><span style="color:#e5e54c">Production dates</span></td><td style="background-color:#999"><span style="color:#e5e54c">Pieces sold (2021)</span></td></tr><tr><td style="background-color:#e5e5e5">Game &amp; Watch</td><td style="background-color:#e5e5e5">1980-1991, 2020-2021</td><td style="background-color:#e5e5e5">44 million</td></tr><tr><td>Game Boy</td><td>1989-2010</td><td><span style="color:#e54c4c">201 million</span><sup>1</sup></td></tr><tr><td style="background-color:#e5e5e5">Nintendo DS</td><td style="background-color:#e5e5e5">2011-2020</td><td style="background-color:#e5e5e5">76 million<sup>2</sup></td></tr><tr><td>Switch</td><td>since 2017</td><td>140 million<sup>3</sup></td></tr><tr><td style="background-color:#e5e5e5" colspan="3"><span style="font-size:10px"><sup>1</sup>119 million Game Boy and Game Boy Color variants, 82 million Game Boy Advance variants.</span><br><span style="font-size:10px"><sup>2</sup>Including all versions: DS, DSi, 2DS, 3DS, and New 2DS/3DS variants.</span><br><span style="font-size:10px"><sup>3</sup>As of early 2024.</span></td></tr></tbody></table></figure><h3 class="document-subtitle">Handheld gaming experience</h3><blockquote class="side-quote"><p style="text-align:right">It\'s dangerous to go alone! Take this.&nbsp;<br><span style="font-size:18px"><i>The Legend of Zelda, 1986</i></span></p></blockquote><p>Games offered by Nintendo include multiple genres, out of which the famous platformer arcade<i>Super Mario</i><img class="image_resized" style="aspect-ratio:94/114;width:2.3%" src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/mario.png" width="94" height="114"> and the adventure role-play<i>Legend of Zelda</i><img class="image_resized" style="aspect-ratio:128/146;width:2.3%" src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/link.png" width="128" height="146"> series are probably the most iconic.</p><hr><p>Games that can be played on the handheld family include (examples of games listed):</p><ul><li>Action &amp; adventure games<ul><li>The<i>Legend of Zelda</i>series</li><li><i>Chrono Trigger</i></li></ul></li><li>First-person action games<ul><li><i>Splatoon</i></li></ul></li><li>Role-playing games (RPG)<ul><li>The<i>Pokémon</i>series</li><li>The<i>Final Fantasy</i>series</li></ul></li></ul>',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		mention: {
			feeds: [
				{
					marker: '@',
					feed: [
						/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
					]
				}
			]
		},
		menuBar: {
			isVisible: true
		},
		placeholder: 'Type or paste your content here!',
		style: {
			definitions: [
				{
					name: 'Article category',
					element: 'h3',
					classes: ['category']
				},
				{
					name: 'Title',
					element: 'h2',
					classes: ['document-title']
				},
				{
					name: 'Subtitle',
					element: 'h3',
					classes: ['document-subtitle']
				},
				{
					name: 'Info box',
					element: 'p',
					classes: ['info-box']
				},
				{
					name: 'Side quote',
					element: 'blockquote',
					classes: ['side-quote']
				},
				{
					name: 'Marker',
					element: 'span',
					classes: ['marker']
				},
				{
					name: 'Spoiler',
					element: 'span',
					classes: ['spoiler']
				},
				{
					name: 'Code (dark)',
					element: 'pre',
					classes: ['fancy-code', 'fancy-code-dark']
				},
				{
					name: 'Code (bright)',
					element: 'pre',
					classes: ['fancy-code', 'fancy-code-bright']
				}
			]
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};

	return (
		<div>
			<div className="main-container">
				<div className="editor-container editor-container_classic-editor editor-container_include-style" ref={editorContainerRef}>
					<div className="editor-container__editor">
						<div ref={editorRef}>{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
