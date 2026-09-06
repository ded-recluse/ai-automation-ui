import { useEffect, useRef, useState } from 'react'
import type { ChartTimeframe } from '../types/chartData'

type ChartUploadProps = {
  timeframe: ChartTimeframe
  file: File | null
  onFileChange: (timeframe: ChartTimeframe, file: File | null) => void
};

function ChartUpload({
    timeframe,
    file,
    onFileChange
}: ChartUploadProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    useEffect(() => {
        if (!file) {
            setPreviewUrl(null)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreviewUrl(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFile = (selectedFile: File | null) => {
        if (!selectedFile) {
            return
        }

        if (!selectedFile.type.startsWith('image/')) {
            return
        }

        onFileChange(timeframe, selectedFile)
    }

    return (
        <div
            className="chart-upload"
            onDragOver={(e) => e.preventDefault()}
            tabIndex={0}
            onDrop={(e) => {
                e.preventDefault()
                handleFile(e.dataTransfer.files[0] ?? null)
            }}
            onPaste={(e) => {
                const items = Array.from(e.clipboardData.items)
                    
                const imageItem = items.find(item =>
                    item.type.startsWith('image/'),
                )

                if (!imageItem) {
                    return
                }

                handleFile(imageItem.getAsFile())
            }}
        >
            <strong>{timeframe}</strong>

            <div>Drag image here or browse</div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation()
                    fileInputRef.current?.click()
                }}
            >
                {file ? 'Replace' : 'Browse'}
            </button>

            {file && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        onFileChange(timeframe, null)
                    }}
                >
                    Remove
                </button>
            )}

            {previewUrl && (
                <img
                    className="chart-preview"
                    src={previewUrl}
                    alt={`${timeframe} chart preview`}
                />
            )}

            {file && <div>{file.name}</div>}
        </div>
    )
}

export default ChartUpload