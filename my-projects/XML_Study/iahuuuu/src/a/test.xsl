<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" />
	<xsl:template match="/">
		<html>
			<head>
				<title>TV Shows</title>
			</head>
			<body>
				* Create an .xsl file (**timetable.xls**) to display each of the
				items above
				* Test your final XSL file (**timetable.xls**) and your
				original XML
				file (**timetable.xml**) here: **[Free Online XSL
				Transformer](http://www.freeformatter.com/xsl-transformer.html)**
				<div style="border-style: groove;">
					1 -
					* Print the names of all modules on the timetables
					<br />

					<xsl:for-each select="timetable/module">
						<xsl:value-of select="name" />
						<br />
					</xsl:for-each>
					<br />
				</div>
				<div style="border-style: groove;">
					2 -
					* Print the names of all modules which have an exam
					<br />
					<xsl:for-each select="timetable/module">
						<xsl:apply-templates select="exam" />
					</xsl:for-each>

				</div>
				<div style="border-style: groove;">
					3 -
					* Print the name, day, time and room of all lab classes

					<br />
					<p>
						<xsl:for-each select="timetable/module">
							<xsl:value-of select="name" />
							->
							<xsl:apply-templates select="classes/lab" />
							<br />
						</xsl:for-each>
					</p>
				</div>
				<div style="border-style: groove;">
					4 -
					* Print the details of any module which has more than one
					lecture in
					a week
					<br />

					<xsl:for-each select="timetable/module">
						<xsl:if test="count(./classes/lecture) >=2">
							<xsl:value-of select="name" />
						</xsl:if>
					</xsl:for-each>
				</div>
				<div style="border-style: groove;">
					5 -
					* Print the day, time and room of all classes
					which take place
					in
					computer labs
					<p>
						<xsl:for-each select="timetable/module">
							<xsl:value-of select="name" />
							->
							<br />
							<xsl:for-each select="classes/*">
								<xsl:if test="room/@type='computerLab'">
									<xsl:value-of select="time" />
									,
									<xsl:value-of select="room" />
									,
									<xsl:value-of select="day" />
									<br />
								</xsl:if>
							</xsl:for-each>
							<br />
						</xsl:for-each>
					</p>
				</div>
				<div style="border-style: groove;">
					6 -
					* Print the name of all modules which have classes
					on a Monday

							<br />
						<xsl:for-each select="timetable/module">
								<xsl:if test="classes/*/day='Mon'">
									<xsl:value-of select="name" />
								</xsl:if>
							<br />
						</xsl:for-each>
				</div>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="exam">
		<xsl:if test=".">
			<xsl:value-of select="../name" />
			<br />
		</xsl:if>
	</xsl:template>

	<xsl:template match="classes/lab">
		<xsl:value-of select="time" />
		,
		<xsl:value-of select="room" />
		,
		<xsl:value-of select="./day" />
	</xsl:template>

</xsl:stylesheet>