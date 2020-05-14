<?xml version="1.0" encoding="UTF-8" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
    <html>
    <head><title>Vendor and Product Listings</title></head>
    <body>
    <h1>Product Catalogue</h1>
	Vendors:
	<ul>
    	<xsl:for-each select="//vendor_name">
    		<xsl:sort select="."/>
    		   <xsl:choose>
    		   	<xsl:when test="../@webvendor!='no'">
    			<li>
    			<xsl:element name="a">
    				<xsl:attribute name="href">
    					#<xsl:value-of select="."/>
    				</xsl:attribute>
    				<xsl:value-of select="."/>
    			</xsl:element>
    			</li>
    		   </xsl:when>
    		   <xsl:otherwise>
    		   	<li><xsl:value-of select="."/></li>
    		   </xsl:otherwise>
    		   </xsl:choose>
    	</xsl:for-each>	
	</ul>

	<xsl:for-each select="//vendor">
		<xsl:sort select="vendor_name"/>
    		   <xsl:if test="@webvendor!='no'">
    			<xsl:apply-templates/>
    		   </xsl:if>	
    	</xsl:for-each>
    </body>
    </html>
    </xsl:template>
    
    <xsl:template match="*">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="text()">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="product">
        <ul><li>
            <xsl:value-of select="short_desc"/>
            <xsl:apply-templates select="product_id"/>
            <xsl:if test="inventory[@color]">
            	<p>Available colours:
            	<br/><xsl:apply-templates select="inventory[@color]"/>
            	</p>
            </xsl:if>
            <p>Price: <xsl:value-of select=".//price[@pricetype='sale'] | 
            			     .//price[@pricetype='retail']"/></p>
            
        </li></ul>
    </xsl:template>
    
    <xsl:template match="inventory[@color and @location='warehouse']">
    	--<xsl:value-of select="@color"/><br/>
    </xsl:template>

    <xsl:template match="product/product_id">
        (<xsl:value-of select="."/>)
    </xsl:template>
    
    <xsl:template match="vendor_name">
    	<xsl:if test="../@webvendor!='no'">
    	<xsl:element name="a">
    		<xsl:attribute name="name"><xsl:value-of select="."/>
    		</xsl:attribute>
       		<h3><xsl:value-of select="."/></h3>
       	</xsl:element>
       	</xsl:if>
    </xsl:template>

</xsl:transform>