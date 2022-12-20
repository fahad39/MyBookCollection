FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
);

FilePond.setOptions({
    stylePanelAspectRatio:1/2,
    imageResizeTagetWidth:100,
    imageResizeTagetHeight:150,
})

FilePond.parse(document.body);