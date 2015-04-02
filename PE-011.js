function highest_product_grid(matrix,n)
{
	var highest_product=0;
	var best_indexes=[];
	for(var i=0;i<matrix.length;i++)
	{
		for(var j=0;j<matrix[i].length;j++)
		{
			if(i+n-1<matrix.length)
			{
				var test_product=1;
				for(var k=0;k<n;k++)
				{
					test_product*=matrix[i+k][j];
				}
				if(highest_product<test_product)
				{
					highest_product=test_product;
					best_indexes=[];
					for(var k=0;k<n;k++)
					{
						best_indexes.push([matrix[i+k][j],i+k,j]);
					}
				}
				if(j+n-1<matrix[i].length)
				{
					var test_product=1;
					for(var k=0;k<n;k++)
					{
						test_product*=matrix[i+k][j+k];
					}
					if(highest_product<test_product)
					{
						highest_product=test_product;
						best_indexes=[];
						for(var k=0;k<n;k++)
						{
							best_indexes.push([matrix[i+k][j+k],i+k,j+k]);
						}
					}
				}
				if(j-(n-1)>=0)
				{
					var test_product=1;
					for(var k=0;k<n;k++)
					{
						test_product*=matrix[i+k][j-k];
					}
					if(highest_product<test_product)
					{
						highest_product=test_product;
						best_indexes=[];
						for(var k=0;k<n;k++)
						{
							best_indexes.push([matrix[i+k][j-k],i+k,j-k]);
						}
					}
				}
			}
			if(j+n-1<matrix[i].length)
			{
				var test_product=1;
				for(var k=0;k<n;k++)
				{
					test_product*=matrix[i][j+k];
				}
				if(highest_product<test_product)
				{
					highest_product=test_product;
					best_indexes=[];
					for(var k=0;k<n;k++)
					{
						best_indexes.push([matrix[i][j+k],i,j+k]);
					}
				}
			}
		}
	}
	return [highest_product,best_indexes];
}
