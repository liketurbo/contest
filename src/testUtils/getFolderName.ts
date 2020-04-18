import path from "path"

const getCurrentFolder = () => {
  const err = new Error()

  const re = /(?<=\().+(?=:\d+:)/u

  const currentFile = (re.exec(err.stack?.split("\n")[3] as string) || [])[0]

  const currentFolder = path.dirname(currentFile)

  return currentFolder
}

const getFolderName = (lvl = 2) => {
  if (lvl < 1) throw new Error("Level should be at least one.")

  const lvls = lvl === 1 ? "." : "../".repeat(lvl - 1)

  const currentFolder = getCurrentFolder()

  return path.basename(path.join(currentFolder, lvls))
}

export default getFolderName
