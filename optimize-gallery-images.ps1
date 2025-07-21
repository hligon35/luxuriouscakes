# Optimize and convert images in 'pics' for gallery use
$sourceFolder = "pics"
$targetFolder = "pics/optimized"
$maxWidth = 1200
$maxHeight = 900
$magickExe = "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe"

 # Get all jpg, jpeg, png files
$images = Get-ChildItem "$sourceFolder\\*.jpg","$sourceFolder\\*.jpeg","$sourceFolder\\*.png" -File
$count = $images.Count
Write-Host "Found $count image(s) in $sourceFolder."
if ($count -eq 0) {
    Write-Host "No images found. Please check the folder and file extensions."
} else {
    foreach ($img in $images) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($img.Name)
    $webpPath = Join-Path $targetFolder "$baseName.webp"
    Write-Host "Processing: $($img.FullName) -> $webpPath"
    try {
                $result = & $magickExe "$($img.FullName)" -resize "${maxWidth}x${maxHeight}>" -quality 85 "$webpPath" 2>&1
        if (Test-Path $webpPath) {
            Write-Host "Success: Converted $($img.Name) to $webpPath"
        } else {
            Write-Host "Error: Conversion failed for $($img.Name). Output: $result"
        }
    } catch {
        Write-Host "Exception: $_"
    }
    }
}
Write-Host "Script finished. Check above for details."